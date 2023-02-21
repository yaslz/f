const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
    console.log("Database connected...");
  } catch (error) {
    console.log("Can not connect to DB!!!!!!");
  }
};
module.exports = connectDB;
