// // // import express from "express";
// // // import multer from "multer";
// // // import Product from "../models/Product.js";

// // // const router = express.Router();
// // // const upload = multer({ dest: "uploads/" });

// // // router.post("/", upload.single("image"), async (req, res) => {
// // //   try {
// // //     const { name, price, category, description } = req.body;

// // //     const product = await Product.create({
// // //       name,
// // //       price,
// // //       category,
// // //       description,
// // //       imageUrl: `/uploads/${req.file.filename}`,
// // //     });

// // //     res.json(product);
// // //   } catch (err) {
// // //     res.status(500).json({ message: "Product upload failed" });
// // //   }
// // // });

// // // export default router;

// // import express from "express";
// // import multer from "multer";
// // import Product from "../models/Product.js";

// // const router = express.Router();
// // const upload = multer({ dest: "uploads/" });

// // router.post("/", upload.single("image"), async (req, res) => {
// //   const { name, price, category, description } = req.body;

// //   const product = await Product.create({
// //     name,
// //     price,
// //     category,
// //     description,
// //     imageUrl: `/uploads/${req.file.filename}`,
// //   });

// //   res.json(product);
// // });

// // export default router;

// import express from "express";
// import multer from "multer";
// import Product from "../models/Product.js";

// const router = express.Router();
// const upload = multer({ dest: "uploads/" });

// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const {
//       name,
//       price,
//       category,
//       ageGroup,
//       color,
//       stock,
//       description,
//     } = req.body;

//     const product = await Product.create({
//       name,
//       price,
//       category,
//       ageGroup,
//       color,
//       stock: Number(stock),   // 🔥 FIX
//       description,
//       imageUrl: `/uploads/${req.file.filename}`,
//     });

//     res.json(product);
//   } catch (e) {
//     res.status(500).json({ message: "Product upload failed" });
//   }
// });

// export default router;
import express from "express";
import Product from "../models/Product.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

/* ===============================
   ADD PRODUCT (ADMIN)
================================ */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const {
      name,
      price,
      category,
      sizes,
      description,
      stock,
    } = req.body;

    const product = await Product.create({
      name,
      price,
      category,
      sizes: sizes ? sizes.split(",") : [],
      description,
      stock,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    console.error("Add product error:", err);
    res.status(500).json({ message: "Add product failed" });
  }
});

export default router;
