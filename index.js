const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connectDB = require("./utils/mongo");
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" }));

require("./routes")(app);

connectDB();
app.listen(PORT);
