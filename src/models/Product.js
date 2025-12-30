// // // // // backend/src/models/Product.js
// // // import mongoose from "mongoose";

// // // const ProductSchema = new mongoose.Schema({
// // //   name: { type: String, required: true },
// // //   price: { type: Number, default: 0 },
// // //   category: { type: String, index: true },
// // //   ageGroup: { type: String, index: true },
// // //   description: String,
// // //   imageUrl: String,
// // //   stock: { type: Number, default: 0 },
// // //   isActive: { type: Boolean, default: true },
// // // }, { timestamps: true });

// // // // Text index for quick search on name + description
// // // ProductSchema.index({ name: "text", description: "text", category: 1, ageGroup: 1 });

// // // const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
// // // export default Product;

// // import mongoose from "mongoose";

// // const productSchema = new mongoose.Schema(
// //   {
// //     name: { type: String, required: true },
// //     imageUrl: String,
// //     price: { type: Number, required: true },
// //     category: String,        // leggings, jeggings, shirts
// //     ageGroup: String,        // 3-4, 4-5 ...
// //     color: String,           // red, blue, black
// //     stock: { type: Number, required: true, min: 0 }, // 🔥 IMPORTANT
// //     description: String,
// //   },
// //   { timestamps: true }
// // );

// // const Product = mongoose.model("Product", productSchema);
// // export default Product;

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     /* BASIC INFO */
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     price: {
//       type: Number,
//       required: true,
//       min: 0,
//     },

//     category: {
//       type: String,
//       index: true,          // leggings, jeggings, shirts
//       trim: true,
//     },

//     ageGroup: {
//       type: String,
//       index: true,          // 3-4, 4-5 ...
//       trim: true,
//     },

//     color: {
//       type: String,         // red, blue, black
//       trim: true,
//     },

//     /* OPTIONAL SIZE SUPPORT (FUTURE SAFE) */
//     sizes: {
//       type: [String],       // ["S","M","L","XL"]
//       default: [],
//     },

//     /* IMAGE */
//     imageUrl: {
//       type: String,
//       trim: true,
//     },

//     /* DESCRIPTION */
//     description: {
//       type: String,
//       trim: true,
//     },

//     /* 🔥 INVENTORY */
//     stock: {
//       type: Number,
//       required: true,
//       min: 0,
//       default: 0,
//     },

//     /* PRODUCT VISIBILITY */
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   { timestamps: true }
// );

// /* 🔍 SEARCH OPTIMIZATION */
// productSchema.index({
//   name: "text",
//   description: "text",
//   category: 1,
//   ageGroup: 1,
// });

// /* SAFE MODEL EXPORT (HOT RELOAD FIX) */
// const Product =
//   mongoose.models.Product || mongoose.model("Product", productSchema);

// export default Product;
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    /* ================= BASIC INFO ================= */
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    /* ================= CATEGORY & FILTERS ================= */
    category: {
      type: String,
      trim: true,
      index: true,          // Leggings, Jeggings
    },

    ageGroup: {
      type: String,
      trim: true,
      index: true,          // 3-4, 4-5, 5-6...
    },

    colour: {
      type: String,
      trim: true,           // Black, Blue, Red
      index: true,
    },

    /* ================= OPTIONAL (FUTURE SAFE) ================= */
    sizes: {
      type: [String],       // ["3-4","4-5","5-6"]
      default: [],
    },

    /* ================= MEDIA ================= */
    imageUrl: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    /* ================= INVENTORY ================= */
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    /* ================= STATUS ================= */
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

/* ================= SEARCH OPTIMIZATION ================= */
productSchema.index({
  name: "text",
  description: "text",
  category: 1,
  ageGroup: 1,
  colour: 1,
});

/* ================= SAFE EXPORT ================= */
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
