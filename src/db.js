// require("dotenv").config();
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const uri = process.env.DB_URI;

//     if (!uri) {
//       throw new Error("DB_URI not set");
//     }

//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("✅ MongoDB Connected Successfully");
//   } catch (error) {
//     console.log("❌ MongoDB Connection Error:", error.message);
//   }
// };

// module.exports = connectDB;
// backend/src/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce";

export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      // these options are defaults in newest drivers, but harmless to include
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message || err);
    throw err;
  }
}
