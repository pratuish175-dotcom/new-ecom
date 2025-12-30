// // // // // // // import express from "express";
// // // // // // // import Product from "../models/Product.js";
// // // // // // // import upload from "../middleware/upload.js";
// // // // // // // import adminAuth from "../middleware/adminAuth.js";

// // // // // // // const router = express.Router();

// // // // // // // /**
// // // // // // //  * ADD PRODUCT (ADMIN)
// // // // // // //  */
// // // // // // // router.post(
// // // // // // //   "/add-product",
// // // // // // //   adminAuth,
// // // // // // //   upload.single("image"),
// // // // // // //   async (req, res) => {
// // // // // // //     try {
// // // // // // //       const {
// // // // // // //         name,
// // // // // // //         price,
// // // // // // //         category,
// // // // // // //         ageGroup,
// // // // // // //         color,
// // // // // // //         sizes,
// // // // // // //         stock,
// // // // // // //         description,
// // // // // // //         isActive,
// // // // // // //       } = req.body;

// // // // // // //       if (!name || !price || stock === undefined) {
// // // // // // //         return res.status(400).json({ message: "Required fields missing" });
// // // // // // //       }

// // // // // // //       const product = await Product.create({
// // // // // // //         name: name.trim(),
// // // // // // //         price,
// // // // // // //         category,
// // // // // // //         ageGroup,
// // // // // // //         color,
// // // // // // //         sizes: sizes ? sizes.split(",").map(s => s.trim()) : [],
// // // // // // //         stock,
// // // // // // //         description,
// // // // // // //         isActive: isActive !== undefined ? isActive : true,
// // // // // // //         imageUrl: req.file?.path || "",
// // // // // // //       });

// // // // // // //       res.status(201).json({
// // // // // // //         message: "Product added successfully",
// // // // // // //         product,
// // // // // // //       });
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //       res.status(500).json({ message: "Product add failed" });
// // // // // // //     }
// // // // // // //   }
// // // // // // // );

// // // // // // // /**
// // // // // // //  * GET ALL PRODUCTS (ADMIN + USER)
// // // // // // //  */
// // // // // // // router.get("/products", async (req, res) => {
// // // // // // //   const products = await Product.find({ isActive: true }).sort({ createdAt: -1 });
// // // // // // //   res.json(products);
// // // // // // // });

// // // // // // // export default router;
// // // // // // import express from "express";
// // // // // // import upload from "../middleware/upload.js";
// // // // // // import adminAuth from "../middleware/adminAuth.js";
// // // // // // import Product from "../models/Product.js";

// // // // // // const router = express.Router();

// // // // // // router.post(
// // // // // //   "/add-product",              // 👈 PATH YE HI HONA CHAHIYE
// // // // // //   adminAuth,
// // // // // //   upload.single("image"),
// // // // // //   async (req, res) => {
// // // // // //     try {
// // // // // //       const {
// // // // // //         name,
// // // // // //         price,
// // // // // //         category,
// // // // // //         ageGroup,
// // // // // //         color,
// // // // // //         sizes,
// // // // // //         stock,
// // // // // //         description,
// // // // // //       } = req.body;

// // // // // //       const product = await Product.create({
// // // // // //         name,
// // // // // //         price,
// // // // // //         category,
// // // // // //         ageGroup,
// // // // // //         color,
// // // // // //         sizes: sizes ? sizes.split(",") : [],
// // // // // //         stock,
// // // // // //         description,
// // // // // //         imageUrl: req.file?.path || "",
// // // // // //       });

// // // // // //       res.status(201).json({ message: "Product added", product });
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       res.status(500).json({ message: "Add product failed" });
// // // // // //     }
// // // // // //   }
// // // // // // );

// // // // // // export default router;
// // // // // import express from "express";
// // // // // import upload from "../middleware/upload.js";
// // // // // import Product from "../models/Product.js";

// // // // // const router = express.Router();

// // // // // router.post(
// // // // //   "/add-product",
// // // // //   upload.single("image"),
// // // // //   async (req, res) => {
// // // // //     try {
// // // // //       const {
// // // // //         name,
// // // // //         price,
// // // // //         category,
// // // // //         ageGroup,
// // // // //         color,
// // // // //         sizes,
// // // // //         stock,
// // // // //         description,
// // // // //       } = req.body;

// // // // //       if (!name || !price || !stock) {
// // // // //         return res.status(400).json({ message: "Missing required fields" });
// // // // //       }

// // // // //       const product = await Product.create({
// // // // //         name,
// // // // //         price,
// // // // //         category,
// // // // //         ageGroup,
// // // // //         color,
// // // // //         sizes: sizes ? sizes.split(",") : [],
// // // // //         stock,
// // // // //         description,
// // // // //         imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
// // // // //       });

// // // // //       res.status(201).json({ message: "Product added", product });
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       res.status(500).json({ message: "Add product failed" });
// // // // //     }
// // // // //   }
// // // // // );

// // // // // export default router;
// // // // import express from "express";
// // // // import Product from "../models/Product.js";

// // // // const router = express.Router();

// // // // /* ================= GET SINGLE PRODUCT (EDIT PAGE) ================= */
// // // // router.get("/:id", async (req, res) => {
// // // //   try {
// // // //     const product = await Product.findById(req.params.id);
// // // //     if (!product)
// // // //       return res.status(404).json({ message: "Product not found" });

// // // //     res.json(product);
// // // //   } catch (err) {
// // // //     res.status(500).json({ message: "Failed to load product" });
// // // //   }
// // // // });

// // // // /* ================= UPDATE PRODUCT ================= */
// // // // router.put("/:id", async (req, res) => {
// // // //   try {
// // // //     const updated = await Product.findByIdAndUpdate(
// // // //       req.params.id,
// // // //       req.body,
// // // //       { new: true }
// // // //     );

// // // //     if (!updated)
// // // //       return res.status(404).json({ message: "Product not found" });

// // // //     res.json({ success: true, product: updated });
// // // //   } catch (err) {
// // // //     console.error("UPDATE ERROR:", err);
// // // //     res.status(500).json({ message: "Update failed" });
// // // //   }
// // // // });

// // // // /* ================= DELETE PRODUCT ================= */
// // // // router.delete("/:id", async (req, res) => {
// // // //   try {
// // // //     await Product.findByIdAndDelete(req.params.id);
// // // //     res.json({ success: true });
// // // //   } catch (err) {
// // // //     res.status(500).json({ message: "Delete failed" });
// // // //   }
// // // // });

// // // // export default router;
// // // import express from "express";
// // // import Product from "../models/Product.js";

// // // const router = express.Router();

// // // /* ================= GET SINGLE PRODUCT ================= */
// // // router.get("/products/:id", async (req, res) => {
// // //   try {
// // //     const product = await Product.findById(req.params.id);
// // //     if (!product)
// // //       return res.status(404).json({ message: "Product not found" });

// // //     res.json(product);
// // //   } catch (err) {
// // //     console.error(err);
// // //     res.status(500).json({ message: "Failed to load product" });
// // //   }
// // // });

// // // /* ================= UPDATE PRODUCT ================= */
// // // router.put("/products/:id", async (req, res) => {
// // //   try {
// // //     const updated = await Product.findByIdAndUpdate(
// // //       req.params.id,
// // //       req.body,
// // //       { new: true }
// // //     );

// // //     if (!updated)
// // //       return res.status(404).json({ message: "Product not found" });

// // //     res.json({ success: true, product: updated });
// // //   } catch (err) {
// // //     console.error("UPDATE ERROR:", err);
// // //     res.status(500).json({ message: "Update failed" });
// // //   }
// // // });

// // // /* ================= DELETE PRODUCT ================= */
// // // router.delete("/products/:id", async (req, res) => {
// // //   try {
// // //     await Product.findByIdAndDelete(req.params.id);
// // //     res.json({ success: true });
// // //   } catch (err) {
// // //     res.status(500).json({ message: "Delete failed" });
// // //   }
// // // });

// // // export default router;

// // import express from "express";
// // import Product from "../models/Product.js";
// // import multer from "multer";
// // import path from "path";

// // const router = express.Router();

// // /* ---------- IMAGE UPLOAD ---------- */
// // const storage = multer.diskStorage({
// //   destination: "uploads/",
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + "-" + file.originalname);
// //   },
// // });

// // const upload = multer({ storage });

// // /* ---------- UPDATE PRODUCT ---------- */
// // router.put("/products/:id", upload.single("image"), async (req, res) => {
// //   try {
// //     const update = {
// //       name: req.body.name,
// //       price: req.body.price,
// //       stock: req.body.stock,
// //       category: req.body.category,
// //       description: req.body.description,
// //     };

// //     if (req.file) {
// //       update.imageUrl = `/uploads/${req.file.filename}`;
// //     }

// //     const product = await Product.findByIdAndUpdate(
// //       req.params.id,
// //       update,
// //       { new: true }
// //     );

// //     res.json(product);
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: "Update failed" });
// //   }
// // });

// // export default router;
// import express from "express";
// import Product from "../models/Product.js";
// import multer from "multer";
// import path from "path";

// const router = express.Router();

// /* ================= IMAGE UPLOAD ================= */
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// /* ================= ADD PRODUCT (ADMIN) =================
//    POST /api/admin/add-product
// ========================================================= */
// router.post("/add-product", upload.single("image"), async (req, res) => {
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

//     if (!name || !price || stock === undefined) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const product = await Product.create({
//       name,
//       price,
//       category,
//       ageGroup,
//       color,
//       stock,
//       description,
//       imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
//       isActive: true,
//     });

//     res.status(201).json({
//       success: true,
//       product,
//     });
//   } catch (err) {
//     console.error("ADD PRODUCT ERROR:", err);
//     res.status(500).json({ message: "Add product failed" });
//   }
// });

// /* ================= UPDATE PRODUCT =================
//    PUT /api/admin/products/:id
// ==================================================== */
// router.put("/products/:id", upload.single("image"), async (req, res) => {
//   try {
//     const update = {
//       name: req.body.name,
//       price: req.body.price,
//       stock: req.body.stock,
//       category: req.body.category,
//       ageGroup: req.body.ageGroup,
//       color: req.body.color,
//       description: req.body.description,
//     };

//     if (req.file) {
//       update.imageUrl = `/uploads/${req.file.filename}`;
//     }

//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       update,
//       { new: true }
//     );

//     res.json(product);
//   } catch (err) {
//     console.error("UPDATE ERROR:", err);
//     res.status(500).json({ message: "Update failed" });
//   }
// });

// /* ================= DELETE PRODUCT =================
//    DELETE /api/admin/products/:id
// ==================================================== */
// router.delete("/products/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ message: "Delete failed" });
//   }
// });

// export default router;
import express from "express";
import Product from "../models/Product.js";
import multer from "multer";
import path from "path";

const router = express.Router();

/* ---------- MULTER ---------- */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

/* =====================================================
   ADD PRODUCT
   POST /api/admin/add-product
===================================================== */
router.post("/add-product", upload.single("image"), async (req, res) => {
  try {
    const { name, price, stock, category, ageGroup, color, description } =
      req.body;

    if (!name || !price || stock === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await Product.create({
      name,
      price,
      stock,
      category,
      ageGroup,
      color,
      description,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
      isActive: true,
    });

    res.status(201).json({ success: true, product });
  } catch (err) {
    console.error("ADD PRODUCT ERROR:", err);
    res.status(500).json({ message: "Add product failed" });
  }
});
        /* =====================================================
   GET ALL PRODUCTS (ADMIN + SITE)
   GET /api/products
===================================================== */
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("GET PRODUCTS ERROR:", err);
    res.status(500).json({ message: "Failed to load products" });
  }
});
      /* =====================================================
   GET SINGLE PRODUCT (EDIT PAGE)
   GET /api/products/:id
===================================================== */
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("GET PRODUCT BY ID ERROR:", err);
    res.status(500).json({ message: "Failed to load product" });
  }
});



export default router;
