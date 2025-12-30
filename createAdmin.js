// // // backend/createAdmin.js
// // require('dotenv').config();
// // const mongoose = require('mongoose');
// // const bcrypt = require('bcryptjs');
// // const Admin = require('./src/models/Admin');

// // async function run() {
// //   await mongoose.connect(process.env.DB_URI);
// //   const email = 'admin@example.com';
// //   const exists = await Admin.findOne({ email });
// //   if (exists) return console.log('admin exists');
// //   const passwordHash = await bcrypt.hash('Admin@123', 10);
// //   await Admin.create({ email, passwordHash, name: 'Admin' });
// //   console.log('created admin:', email);
// //   process.exit(0);
// // }
// // run().catch(e => { console.error(e); process.exit(1); });

// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import dotenv from "dotenv";
// import User from "./src/models/User.js";

// dotenv.config();

// const MONGO_URI = process.env.MONGO_URI;

// async function createAdmin() {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("MongoDB connected");

//     const adminEmail = "admin@geetashop.com";
//     const adminPassword = "admin123";

//     const existing = await User.findOne({ email: adminEmail });

//     if (existing) {
//       console.log("❌ Admin already exists");
//       process.exit();
//     }

//     const hashed = await bcrypt.hash(adminPassword, 10);

//     const admin = await User.create({
//       name: "Admin",
//       email: adminEmail,
//       password: hashed,
//       role: "admin",
//     });

//     console.log("✅ Admin created successfully");
//     console.log("Email:", adminEmail);
//     console.log("Password:", adminPassword);

//     process.exit();
//   } catch (err) {
//     console.error("Admin create error:", err);
//     process.exit(1);
//   }
// }

// createAdmin();

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./src/models/User.js";
import dotenv from "dotenv";

dotenv.config();

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  const email = "admin@geetashop.com";

  const exists = await User.findOne({ email });
  if (exists) {
    console.log("Admin already exists");
    process.exit();
  }

  const hash = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email,
    password: hash,
    role: "admin",
  });

  console.log("✅ Admin created");
  process.exit();
}

createAdmin();
