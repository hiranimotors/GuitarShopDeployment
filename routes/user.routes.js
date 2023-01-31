const router = require("express").Router();
const User = require("../models/User.model");
const Product = require("../models/Product.model");
const { isLoggedIn, isLoggedOut } = require("../middleware/route.guard");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

router.get("/", isLoggedIn, (req, res, next) => {
  try {
    res.render("profile/user-profile", {
      userInSession: req.session.currentUser,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/edit-details", isLoggedIn, (req, res, next) => {
  res.render("profile/edit-profile", { currentUser: req.session.currentUser });
});

router.post("/edit-details", async (req, res, next) => {
  const { email, name, consent } = req.body;
  await User.findByIdAndUpdate(req.session.currentUser._id, {
    email: email,
    name: name,
    consent: consent,
  });
  const updatedUser = await User.findById(req.session.currentUser._id);
  req.session.currentUser = updatedUser;
  res.redirect("/profile");
});

router.get("/forgot-password", isLoggedIn, (req, res, next) => {
  res.render("profile/forgot-password");
});

router.post("/forgot-password", async (req, res, next) => {
  try {
    const { currentPassword, newPasswordFirst, newPasswordSecond } = req.body;
    console.log(req.body);

    const currentUser = req.session.currentUser;
    const passwordHash = currentUser.passwordHash;
    console.log(passwordHash);

    if (!bcrypt.compareSync(currentPassword, passwordHash)) {
      res.render("profile/forgot-password", {
        errorMessage: "current password is incorrect",
      });
    }

    if (newPasswordFirst !== newPasswordSecond) {
      res.render("profile/forgot-password", {
        errorMessage: "passwords must match",
      });
    }

    if (currentPassword === newPasswordFirst) {
      res.render("profile/forgot-password", {
        errorMessage: "new password must be different",
      });
    }

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(newPasswordFirst)) {
      res.render("profile/forgot-password", {
        errorMessage:
          "Password not long enough. Must contain at least one uppercase letter",
      });
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(newPasswordFirst, salt);
    await User.findByIdAndUpdate(currentUser._id, {
      passwordHash: hashedPassword,
    });

    await res.redirect("/profile");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
git;
