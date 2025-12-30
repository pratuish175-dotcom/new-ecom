// // backend/src/routes/admin.js
// import express from "express";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import Product from "../models/Product.js";

// import cloudinary from "cloudinary";
// import streamifier from "streamifier";
// import multer from "multer";

// const router = express.Router();

// // multer memory storage
// const upload = multer();

// // Cloudinary config (ensure CLOUDINARY_* are in your .env)
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // SIMPLE ADMIN LOGIN (env based)
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@example.com";
// const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
// const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// // 🔐 Admin login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body || {};

//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password required" });
//     }

//     if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
//       return res.status(401).json({ error: "Invalid admin credentials" });
//     }

//     const token = jwt.sign(
//       { role: "admin", email },
//       JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({ token });
//   } catch (err) {
//     console.error("Admin login error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // 🛡 Middleware: require admin token
// function requireAdmin(req, res, next) {
//   const authHeader = req.headers.authorization || "";
//   const token = authHeader.startsWith("Bearer ")
//     ? authHeader.slice(7)
//     : null;

//   if (!token) {
//     return res.status(401).json({ error: "Missing admin token" });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     if (decoded.role !== "admin") {
//       return res.status(403).json({ error: "Not an admin" });
//     }
//     req.admin = decoded;
//     next();
//   } catch (err) {
//     console.error("Admin auth error:", err);
//     res.status(401).json({ error: "Invalid or expired token" });
//   }
// }

// /*
//   Image upload (Cloudinary)
//   - Route: POST /api/admin/upload-image
//   - Protected with requireAdmin, accepts multipart/form-data 'file'
//   - Returns { url: "<secure_url>" }
// */
// router.post(
//   "/upload-image",
//   requireAdmin,
//   upload.single("file"),
//   async (req, res) => {
//     try {
//       if (!req.file) return res.status(400).json({ error: "No file uploaded" });

//       const buffer = req.file.buffer;
//       const streamUpload = (buffer) =>
//         new Promise((resolve, reject) => {
//           const stream = cloudinary.v2.uploader.upload_stream(
//             { folder: "geeta_shop" },
//             (error, result) => {
//               if (result) resolve(result);
//               else reject(error);
//             }
//           );
//           streamifier.createReadStream(buffer).pipe(stream);
//         });

//       const result = await streamUpload(buffer);
//       return res.json({ url: result.secure_url });
//     } catch (err) {
//       console.error("Image upload error:", err);
//       res.status(500).json({ error: "Upload failed" });
//     }
//   }
// );

// // ➕ Add product
// router.post("/add-product", requireAdmin, async (req, res) => {
//   try {
//     const {
//       name,
//       price,
//       category,
//       ageGroup,
//       imageUrl,
//       description,
//       stock,
//       isActive,
//     } = req.body || {};

//     if (!name || price == null) {
//       return res.status(400).json({ error: "Name and price are required" });
//     }

//     const product = new Product({
//       name,
//       price,
//       category,
//       ageGroup,
//       imageUrl,
//       description,
//       stock: Number(stock) || 0,
//       isActive: isActive !== undefined ? !!isActive : true,
//     });

//     await product.save();
//     res.status(201).json({ message: "Product added", product });
//   } catch (err) {
//     console.error("Add product error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // 📄 Get all products (for admin dashboard)
// router.get("/products", requireAdmin, async (_req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     console.error("List products error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✏️ Update product (stock / name / price / etc.)
// router.put("/product/:id", requireAdmin, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       name,
//       price,
//       category,
//       ageGroup,
//       imageUrl,
//       description,
//       stock,
//       isActive,
//     } = req.body || {};

//     const update = {};
//     if (name !== undefined) update.name = name;
//     if (price !== undefined) update.price = price;
//     if (category !== undefined) update.category = category;
//     if (ageGroup !== undefined) update.ageGroup = ageGroup;
//     if (imageUrl !== undefined) update.imageUrl = imageUrl;
//     if (description !== undefined) update.description = description;
//     if (stock !== undefined) update.stock = Number(stock);
//     if (isActive !== undefined) update.isActive = !!isActive;

//     const updated = await Product.findByIdAndUpdate(id, update, {
//       new: true,
//     });

//     if (!updated) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     res.json({ message: "Product updated", product: updated });
//   } catch (err) {
//     console.error("Update product error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ❌ Delete product
// router.delete("/product/:id", requireAdmin, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Product.findByIdAndDelete(id);
//     if (!deleted) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     res.json({ message: "Product deleted" });
//   } catch (err) {
//     console.error("Delete product error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;
// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const router = express.Router();

// router.post("/admin/login", async (req, res) => {
//   const { email, password } = req.body;

//   const admin = await User.findOne({ email, role: "admin" });
//   if (!admin) {
//     return res.status(404).json({ message: "Admin not found" });
//   }

//   const isMatch = await bcrypt.compare(password, admin.password);
//   if (!isMatch) {
//     return res.status(401).json({ message: "Invalid password" });
//   }

//   const token = jwt.sign(
//     { id: admin._id, role: "admin" },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   res.json({
//     token,
//     admin: {
//       id: admin._id,
//       name: admin.name,
//       email: admin.email,
//     },
//   });
// });

// export default router;

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// =======================
// ADMIN LOGIN
// =======================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Find admin user
    const admin = await User.findOne({ email, role: "admin" });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate token
    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "1d" }
    );

    return res.json({
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (err) {
    console.error("Admin login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
