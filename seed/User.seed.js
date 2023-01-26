const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const User = require("../models/User.model");
const MONGO_URI = require("../db/index");

const data = [
  {
    email: "craig@craig",
    passwordHash: "fjghsdfhgjksdhgj",
    userType: "admin",
  },
  {
    email: "craig@craig",
    passwordHash: "fjghsdfhgjksdhgj",
    userType: "admin",
  }
];

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connection Made");
    Product.create(data);
  })
  .catch((error) => {
    console.log(error);
  });
