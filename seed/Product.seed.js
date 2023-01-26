const mongoose = require("mongoose");
const Product = require("../models/Product.model");
const User = require("../models/User.model");
const MONGO_URI = require("../db/index");

const data = [
  {
    productType: "acoustic guitar",
    productName: "Martin Acoustic",
    manufacturer: "Martin",
    model: "Martin AG1",
    price: 456,
    images: "https://images.media-allrecipes.com/images/75131.jpg",
    colour: "Sunburst",
    description: "A fine guitar indeed",
    frets: 20,
    pickups: "n/a",
  },
  {
    productType: "electric guitar",
    productName: "Fender Stratocaster",
    manufacturer: "Fender",
    model: "American Standard",
    price: 1234,
    images: "https://images.media-allrecipes.com/images/75131.jpg",
    colour: "Sunburst",
    description: "A beautiful thing to behold",
    frets: 24,
    pickups: "Fat 50s",
  },
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
