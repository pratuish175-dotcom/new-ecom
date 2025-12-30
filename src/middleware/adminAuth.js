// import jwt from "jsonwebtoken";

// const adminAuth = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const token = authHeader.split(" ")[1];

//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret123");

//     // 🔥 SIMPLE CHECK (later improve kar sakte ho)
//     if (!decoded || !decoded.isAdmin) {
//       return res.status(403).json({ message: "Admin access denied" });
//     }

//     req.admin = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// export default adminAuth;
import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No admin token provided" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret123"
    );

    // 🔥 MOST IMPORTANT CHECK
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }

    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid admin token" });
  }
};

export default adminAuth;
