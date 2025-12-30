// // backend/src/models/Product.js
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
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
//       trim: true,
//     },

//     ageGroup: {
//       type: String,
//       trim: true,
//     },

//     imageUrl: {
//       type: String,
//       trim: true,
//     },

//     description: {
//       type: String,
//       trim: true,
//     },

//     // 🔥 INVENTORY
//     stock: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },

//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Product = mongoose.model("Product", productSchema);
// export default Product;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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

    category: {
      type: String,
      required: true,
      trim: true,
    },

    ageGroup: {
      type: String,
      trim: true, // "3-4", "4-5"
    },

    sizes: {
      type: [String], // ["S","M","L","XL"]
      default: [],
    },

    imageUrl: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    /* 🔥 INVENTORY */
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
