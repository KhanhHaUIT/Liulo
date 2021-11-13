const mongoose = require("mongoose");

const connectAndRetry = async () => {
  let MONGO_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rrcyu.mongodb.net/Liulo?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("Cannot connect to database - retrying in 5 sec ...");
    setTimeout(connectAndRetry, 5000);
  }
};

module.exports = connectAndRetry;
