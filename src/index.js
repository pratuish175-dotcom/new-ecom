import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

/* ========= ROUTES ========= */
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import adminProductRoutes from "./routes/adminProduct.js";
import orderRoutes from "./routes/orders.js";
import adminOrdersRoutes from "./routes/adminOrders.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

/* ========= FIX __dirname for ES Modules ========= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ========= MIDDLEWARE ========= */
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

/* ========= API ROUTES ========= */
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

/* Admin Route Structure Fixed */
app.use("/api/admin", adminRoutes);
app.use("/api/admin/orders", adminOrdersRoutes);
app.use("/api/admin/products", adminProductRoutes);

/* ========= TEST ROUTE ========= */
app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "API WORKING 🚀" });
});

/* ========= SERVE FRONTEND BUILD ========= */
const frontendPath = path.join(__dirname, "../frontend/build");
app.use(express.static(frontendPath));

/* 🚀 FIX FOR EXPRESS 5 — wildcard route must be a regex */
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

/* ========= DATABASE + START SERVER ========= */
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ecommerce" // optional explicit database name
    });
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

startServer();
