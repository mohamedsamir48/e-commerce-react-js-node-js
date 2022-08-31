const mongoose = require("mongoose");
const router = require("express").Router();
const Product = require("../models/Product");
const { admin } = require("./verifyToken");

router.get("/", async (req, res) => {
  categoryQuery = req.query.category;
  newQuery = req.query.new;
  if (categoryQuery) {
    try {
      const products = await Product.find({ categories: categoryQuery });
      res.status(200).json(products);
    } catch (err) {
      res.status(401).json(err);
    }
  } else if (newQuery) {
    try {
      const products = await Product.find().sort({ _id: -1 }).limit(50);
      res.status(200).json(products);
    } catch (err) {
      res.status(401).json(err);
      console.log(err);
    }
  } else {
    try {
      const products = await Product.find();

      res.status(200).json(products);
    } catch (err) {
      res.status(401).json(err);
    }
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
    console.log("hi error");
  }
});
router.post("/", admin, async (req, res) => {
  const newProduct = await new Product({
    title: req.body.title,
    desc: req.body.desc,
    categories: req.body.categories,
    img: req.body.img,
    size: req.body.size,
    colors: req.body.size,
    price: req.body.price,
  });
  newProduct.save();
  res.status(200).json(newProduct);
});

router.put("/:id", admin, async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  !product && res.status(401).json("the product not found");
  res.status(201).json(product);
});

router.delete("/:id", admin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(202).json(`${product.title} has been deleted`);
  } catch (err) {
    res.status(401).json(err);
  }
});
module.exports = router;
