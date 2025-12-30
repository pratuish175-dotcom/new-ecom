// // // // // // // // // // const upload = require("../config/multer");

// // // // // // // // // // // Image Upload Route
// // // // // // // // // // router.post("/upload", upload.single("image"), (req, res) => {
// // // // // // // // // //   try {
// // // // // // // // // //     res.json({
// // // // // // // // // //       imageUrl: req.file.path, // Cloudinary URL
// // // // // // // // // //     });
// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     res.status(500).json({ message: "Image upload failed" });
// // // // // // // // // //   }
// // // // // // // // // // });


// // // // // // // // // // import express from "express";
// // // // // // // // // // import Product from "../models/Product.js";

// // // // // // // // // // const router = express.Router();

// // // // // // // // // // router.get("/", async (req, res) => {
// // // // // // // // // //   const products = await Product.find();
// // // // // // // // // //   res.json(products);
// // // // // // // // // // });

// // // // // // // // // // export default router;

// // // // // // // // // import express from "express";
// // // // // // // // // import Product from "../models/Product.js";

// // // // // // // // // const router = express.Router();

// // // // // // // // // /*
// // // // // // // // //   GET ALL PRODUCTS
// // // // // // // // //   Used by: Products page (shows ALL products)
// // // // // // // // // */
// // // // // // // // // router.get("/", async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const products = await Product.find().sort({ createdAt: -1 });
// // // // // // // // //     res.json(products);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     res.status(500).json({ message: "Failed to fetch products" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // /*
// // // // // // // // //   GET FEATURED PRODUCTS (HOME PAGE)
// // // // // // // // //   Used by: Home page (shows LIMITED products)
// // // // // // // // // */
// // // // // // // // // router.get("/featured", async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const limit = Number(req.query.limit) || 2; // default 2
// // // // // // // // //     const products = await Product.find()
// // // // // // // // //       .sort({ createdAt: -1 })
// // // // // // // // //       .limit(limit);

// // // // // // // // //     res.json(products);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     res.status(500).json({ message: "Failed to fetch featured products" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // export default router;

// // // // // // // // import express from "express";
// // // // // // // // import Product from "../models/Product.js";

// // // // // // // // const router = express.Router();

// // // // // // // // // ALL PRODUCTS (Products Page)
// // // // // // // // router.get("/", async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const products = await Product.find().sort({ createdAt: -1 });
// // // // // // // //     res.json(products);
// // // // // // // //   } catch {
// // // // // // // //     res.status(500).json({ message: "Failed to fetch products" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // export default router;

// // // // // // // import express from "express";
// // // // // // // import Product from "../models/Product.js";

// // // // // // // const router = express.Router();

// // // // // // // /* GET ALL PRODUCTS */
// // // // // // // router.get("/", async (req, res) => {
// // // // // // //   try {
// // // // // // //     const products = await Product.find().sort({ createdAt: -1 });
// // // // // // //     res.json(products);
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Products fetch error:", err);
// // // // // // //     res.status(500).json({ message: "Failed to fetch products" });
// // // // // // //   }
// // // // // // // });

// // // // // // // export default router;

// // // // // // import express from "express";
// // // // // // import Product from "../models/Product.js";

// // // // // // const router = express.Router();

// // // // // // /* GET ALL PRODUCTS */
// // // // // // router.get("/", async (req, res) => {
// // // // // //   try {
// // // // // //     const products = await Product.find().sort({ createdAt: -1 });
// // // // // //     res.json(products);
// // // // // //   } catch (err) {
// // // // // //     console.error("Products error:", err);
// // // // // //     res.status(500).json({ message: "Failed to fetch products" });
// // // // // //   }
// // // // // // });

// // // // // // export default router;
// // // // // import express from "express";
// // // // // import Product from "../models/Product.js";

// // // // // const router = express.Router();

// // // // // /* 🔥 ADD PRODUCT FIX */
// // // // // router.post("/add", async (req, res) => {
// // // // //   try {
// // // // //     const product = await Product.create(req.body);
// // // // //     res.status(201).json({ success: true, product });
// // // // //   } catch (err) {
// // // // //     console.error("ADD PRODUCT ERROR:", err);
// // // // //     res.status(500).json({ success: false, message: "Failed to add product" });
// // // // //   }
// // // // // });

// // // // // export default router;

// // // // import express from "express";
// // // // import Product from "../models/Product.js";

// // // // const router = express.Router();

// // // // /* GET ALL PRODUCTS */
// // // // router.get("/", async (req, res) => {
// // // //   try {
// // // //     const products = await Product.find().sort({ createdAt: -1 });
// // // //     res.json(products);
// // // //   } catch (err) {
// // // //     res.status(500).json({ message: "Failed to fetch products" });
// // // //   }
// // // // });

// // // // /* ADD PRODUCT */
// // // // router.post("/add", async (req, res) => {
// // // //   try {
// // // //     console.log("REQ BODY 👉", req.body); // DEBUG

// // // //     const product = await Product.create(req.body);
// // // //     res.status(201).json({ success: true, product });
// // // //   } catch (err) {
// // // //     console.error("ADD PRODUCT ERROR:", err);
// // // //     res.status(500).json({ success: false, message: err.message });
// // // //   }
// // // // });

// // // // export default router;
// // // import express from "express";
// // // import Product from "../models/Product.js";

// // // const router = express.Router();

// // // /* GET ALL PRODUCTS */
// // // router.get("/", async (req, res) => {
// // //   try {
// // //     const products = await Product.find().sort({ createdAt: -1 });
// // //     res.json(products);
// // //   } catch (err) {
// // //     res.status(500).json({ message: "Failed to fetch products" });
// // //   }
// // // });

// // // /* ADD PRODUCT */
// // // router.post("/add", async (req, res) => {
// // //   try {
// // //     console.log("REQ BODY 👉", req.body);

// // //     const { name, price } = req.body;

// // //     if (!name || !price) {
// // //       return res.status(400).json({
// // //         message: "Name and Price are required",
// // //       });
// // //     }

// // //     const product = await Product.create({
// // //       name,
// // //       price,
// // //     });

// // //     res.status(201).json({ success: true, product });
// // //   } catch (err) {
// // //     console.error("ADD PRODUCT ERROR:", err);
// // //     res.status(500).json({ message: err.message });
// // //   }
// // // });

// // // export default router;

// // import express from "express";
// // import Product from "../models/Product.js";

// // const router = express.Router();

// // /* ===============================
// //    GET ALL PRODUCTS
// //    =============================== */
// // router.get("/", async (req, res) => {
// //   try {
// //     const products = await Product.find().sort({ createdAt: -1 });
// //     res.json(products);
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to fetch products" });
// //   }
// // });

// // /* ===============================
// //    🔥 GET PRODUCT BY ID (REQUIRED)
// //    Used by:
// //    - AdminEditProduct
// //    - CartContext
// //    - Product Details
// //    =============================== */
// // router.get("/:id", async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);

// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }

// //     res.json(product);
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to fetch product" });
// //   }
// // });

// // /* ===============================
// //    ADD PRODUCT
// //    =============================== */
// // router.post("/add", async (req, res) => {
// //   try {
// //     const { name, price, description, imageUrl, stock, category } = req.body;

// //     if (!name || !price) {
// //       return res.status(400).json({
// //         message: "Name and Price are required",
// //       });
// //     }

// //     const product = await Product.create({
// //       name,
// //       price,
// //       description,
// //       imageUrl,
// //       stock,
// //       category,
// //     });

// //     res.status(201).json({ success: true, product });
// //   } catch (err) {
// //     console.error("ADD PRODUCT ERROR:", err);
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // /* ===============================
// //    UPDATE PRODUCT (ADMIN EDIT)
// //    =============================== */
// // router.put("/:id", async (req, res) => {
// //   try {
// //     const updated = await Product.findByIdAndUpdate(
// //       req.params.id,
// //       req.body,
// //       { new: true }
// //     );

// //     if (!updated) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }

// //     res.json(updated);
// //   } catch (err) {
// //     res.status(500).json({ message: "Update failed" });
// //   }
// // });

// // /* ===============================
// //    DELETE PRODUCT
// //    =============================== */
// // router.delete("/:id", async (req, res) => {
// //   try {
// //     const deleted = await Product.findByIdAndDelete(req.params.id);

// //     if (!deleted) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }

// //     res.json({ success: true });
// //   } catch (err) {
// //     res.status(500).json({ message: "Delete failed" });
// //   }
// // });

// // export default router;
// import express from "express";
// import Product from "../models/Product.js";

// const router = express.Router();

// /* ================= GET ALL PRODUCTS (USER) ================= */
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch products" });
//   }
// });

// /* ================= GET SINGLE PRODUCT ================= */
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: "Not found" });
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch product" });
//   }
// });

// export default router;
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

/* =================================================
   GET ALL PRODUCTS (WITH FILTERS)
   Supports:
   - category
   - ageGroup
   - colour
   Example:
   /api/products?category=Leggings&ageGroup=6-7&colour=Black
   ================================================= */
router.get("/", async (req, res) => {
  try {
    const { category, ageGroup, colour } = req.query;

    const filter = {};

    if (category) filter.category = category;
    if (ageGroup) filter.ageGroup = ageGroup;
    if (colour) filter.colour = colour;

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("PRODUCT FETCH ERROR:", err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

/* =================================================
   GET SINGLE PRODUCT
   ================================================= */
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

/* =================================================
   ADD PRODUCT (ADMIN)
   ================================================= */
router.post("/add", async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      imageUrl,
      stock,
      category,
      ageGroup,
      colour,
    } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and price required" });
    }

    const product = await Product.create({
      name,
      price,
      description,
      imageUrl,
      stock,
      category,
      ageGroup,
      colour,
    });

    res.status(201).json({ success: true, product });
  } catch (err) {
    console.error("ADD PRODUCT ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

/* =================================================
   UPDATE PRODUCT (ADMIN)
   ================================================= */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

/* =================================================
   DELETE PRODUCT (ADMIN)
   ================================================= */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
