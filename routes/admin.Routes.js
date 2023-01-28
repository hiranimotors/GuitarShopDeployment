const router = require("express").Router();
const User = require("../models/User.model");
const Product = require("../models/Product.model");
const {
  isLoggedIn,
  isLoggedOut,
  isAdmin
} = require("../middleware/route.guard");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

// ADMIN ROUTES


router.get("/all-products", isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    console.log(allProducts);

    res.render("admin/adminAllProducts", { allProducts });
  } catch (err) {
    next(err);
  }
});

router.get("/create-product", isLoggedIn, isAdmin, (req, res, next) => {
    try {
      res.render("admin/adminCreateProduct");
    } catch (err) {
      next(err);
    }
  });
  
  router.post("/create-product", isLoggedIn, isAdmin, async (req, res, next) => {
    try {
      await Product.create(req.body);
      res.redirect("/admin/all-products");
    } catch (err) {
      next(err);
    }
  });

router.get("/:productId",isLoggedIn, isAdmin, (req, res, next) => {
  try {
    Product.findById(req.params.productId).then((individualProduct) => {
      console.log(individualProduct);
      res.render("admin/adminIndividualProduct", individualProduct);
    });
  } catch (err) {
    next(err);
  }
});


router.post("/:productId/delete",isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const id = req.params.productId
    console.log("id is" + id)
    await Product.findByIdAndDelete(id);
    await res.redirect("/admin/all-products");
  } catch (err) {
    next(err);
  }
});

// router.get("/admin/:productId/edit", async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.productId);
//     res.render("admin/edit-product", product);
//   } catch (err) {
//     next(err);
//   }
// });

router.post("/admin/:productId/edit",isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    await Product.findByIdAndUpdate(req.params.productId, req.body);
    res.redirect(`/admin/${req.params.productId}`);
  } catch (err) {
    next(err);
  }
});



module.exports = router;