const User = require("../models/users");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ error: "Username or password is not correct!" });
    }
    if (! await argon2.verify(user.password, password) ){
      return res
        .status(401)
        .json({ error: "Username or password is not correct!" });
    }
    const token = jwt.sign({ id: user._id }, process.env.APP_SECRET);
    res.status(200).json({ token });
  },
  register: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      let user = await User.findOne({ username });
      if (user) {
        return res.status(400).json({ error: "Username already exists!" });
      }
      user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: "Email already exists!" });
      }
      const newUser = new User({ username, password, email });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.APP_SECRET);
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  googleLogin: async (req, res) => {
    const client = new OAuth2Client(`${process.env.GOOGLE_CLIENT_ID}`);
    const { tokenId } = req.body;
    
    try {
      const response = await client.verifyIdToken({
        idToken: tokenId,
        audience: `${process.env.GOOGLE_CLIENT_ID}`,
      });
      const { sub, email_verified,  email, picture } = response.payload;
    
      if (email_verified) {
        let user = await User.findOne({ email });
        
        if (!user) {
          user = await User.create({
            username: `google_${sub}`,
            email,
            password,
            avatar: picture,
          });
        }
        const token = jwt.sign({ sub: user._id }, process.env.APP_SECRET);
        return res.json({
          success: true,
          message: 'Login successful',
          token,
        });
      }
      return res
        .status(403)
        .json({ success: true, message: 'Email is not verified' });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error,
      });
    }
  }
};
