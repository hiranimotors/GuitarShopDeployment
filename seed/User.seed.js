const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const User = require("../models/User.model");
const MONGO_URI = require("../db/index");

const data = [
  {
    email: "craig@jrbsolutions.co.uk",
    passwordHash: "<input passwordHash from your mongo compass here>",
    userType: "admin",
    name: "Craig Butler",
    consent: "yes",
  },
  {
    email: "o.ali94@gmail.com",
    passwordHash:
      "$2a$10$cAF.fUwWkyAy/DaCRwTGp.2Vpd0b/xD/3z8KbVqd72C.VO/CzMZJi",
    userType: "admin",
    name: "Omar Ali",
    consent: "yes",
  },
];

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connection Made");
    User.create(data);
  })
  .catch((error) => {
    console.log(error);
  });
