// // // // backend/server.js (replace your file with this)
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const path = require('path');
// // // const cors = require('cors');
// // // const helmet = require('helmet');
// // // require('dotenv').config();

// // // const authRoutes = require('./routes/authRoutes');       // ensure this file exists
// // // const productRoutes = require('./routes/productRoutes'); // ensure this file exists
// // // // const adminRoutes = require('./routes/admin'); // enable if you have this

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;
// // // const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/shop';

// // // // Security + parsing middleware
// // // app.use(helmet());
// // // app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // adjust origin as needed
// // // app.use(express.json());           // MUST be before route registration
// // // app.use(express.urlencoded({ extended: true }));

// // // // Basic health check (helps to confirm server is running)
// // // app.get('/', (req, res) => res.json({ ok: true, msg: 'Backend running' }));

// // // // Mount API routes (single registration each)
// // // app.use('/api/auth', authRoutes);
// // // app.use('/api/products', productRoutes);
// // // app.use("/api", orderRoutes);
// // // app.use("/api", adminOrderRoutes);
// // // app.use("/api", orderRoutes);
// // // import adminNotificationRoutes from "./routes/adminNotifications.js";


// // // // app.use('/api/admin', adminRoutes); // uncomment if you have admin route

// // // // Serve uploaded files (if any)
// // // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// // // app.use("/api", adminNotificationRoutes);

// // // // Mongoose settings & event logging
// // // mongoose.set('strictQuery', false);
// // // mongoose.set('bufferCommands', false);

// // // const mongooseOptions = {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // //   serverSelectionTimeoutMS: 5000,
// // //   socketTimeoutMS: 45000
// // // };

// // // mongoose.connection.on('connected', () => console.log('Mongoose: connected to MongoDB'));
// // // mongoose.connection.on('disconnected', () => console.warn('Mongoose: disconnected from MongoDB'));
// // // mongoose.connection.on('reconnected', () => console.log('Mongoose: reconnected to MongoDB'));
// // // mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err && err.message));

// // // // Try to connect to MongoDB, but start server regardless
// // // mongoose.connect(MONGO, mongooseOptions)
// // //   .then(() => console.log('MongoDB connected'))
// // //   .catch(err => console.warn('MongoDB connection error (will continue without DB):', err && err.message))
// // //   .finally(() => {
// // //     app.listen(PORT, () => {
// // //       console.log(`Server running on http://localhost:${PORT}`);
// // //       console.log(`MONGO_URI: ${MONGO}`);
// // //     });
// // //   });

// // // // Graceful shutdown
// // // process.on('SIGINT', async () => {
// // //   console.log('SIGINT received — closing server');
// // //   try {
// // //     await mongoose.connection.close();
// // //     console.log('Mongoose connection closed');
// // //   } catch (e) {
// // //     // ignore
// // //   }
// // //   process.exit(0);
// // // });
// // import express from "express";
// // import dotenv from "dotenv";
// // import mongoose from "mongoose";
// // import cors from "cors";

// // import authRoutes from "./src/routes/auth.js";
// // import adminRoutes from "./src/routes/admin.js";
// // import orderRoutes from "./src/routes/orders.js";

// // dotenv.config();

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // // 🔥 ROUTES
// // app.use("/api/auth", authRoutes);
// // app.use("/api/admin", adminRoutes);
// // app.use("/api", orderRoutes);
// // app.use("/api/admin", adminProductRoutes);


// // // 🔥 TEST ROUTE
// // app.get("/api/test", (req, res) => {
// //   res.json({ success: true, message: "API WORKING" });
// // });

// // // 🔥 DB
// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => console.log("MongoDB connected"))
// //   .catch((err) => console.error("Mongo error:", err));

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";

// import authRoutes from "./src/routes/auth.js";
// import adminRoutes from "./src/routes/admin.js";
// import adminProductRoutes from "./src/routes/adminProduct.js"; // ✅ ADD THIS
// import orderRoutes from "./src/routes/orders.js";
// import adminProductRoutes from "./src/routes/adminProduct.js";

// dotenv.config();

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(cors());

// // 🔥 BODY SIZE LIMIT (VERY IMPORTANT)
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));

// /* ================= ROUTES ================= */
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/admin", adminProductRoutes); // ✅ NOW WORKING
// app.use("/api", orderRoutes);
// app.use("/api/admin", adminProductRoutes);

// /* ================= TEST ================= */
// app.get("/api/test", (req, res) => {
//   res.json({ success: true, message: "API WORKING" });
// });

// /* ================= DATABASE ================= */
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ Mongo error:", err));

// /* ================= SERVER ================= */
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// ✅ ROUTES (IMPORT ONCE ONLY)
import authRoutes from "./src/routes/auth.js";
import adminRoutes from "./src/routes/admin.js";
import adminProductRoutes from "./src/routes/adminProduct.js";
import orderRoutes from "./src/routes/orders.js";
import orderRoutes from "./src/routes/orderroutes.js";


dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

/* ================= ROUTES ================= */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminProductRoutes);
app.use("/api/orders", ordersRoutes);


// 🔥 MOST IMPORTANT (ORDERS)
app.use("/api/orders", orderRoutes);

/* ================= TEST ROUTE ================= */
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "API WORKING" });
});

/* ================= DATABASE ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error:", err));

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
