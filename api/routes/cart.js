const router = require("express").Router();
const Cart = require("../models/Cart");
const { verifyToken, authorization } = require("./verifyToken");

router.get("/", verifyToken, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.user.id });
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/:id", authorization, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.user.id });
    res.status(200).json(cart);
  } catch (err) {
    res.status.json(err);
  }
});

router.post("/:productId", verifyToken, async (req, res) => {
  try {
    const newCart = new Cart({
      userId: req.user.id,
      products: [
        {
          productId: req.params.productId,
          quantity: req.body.quantity,
          color: req.body.color,
          size: req.body.size,
        },
      ],
    });
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id/:cartId", authorization, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(cart);
  } catch (err) {
    res.status(401).json(err);
  }
});

router.delete("/:id/:cartId", authorization, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.cartId);
    res.status(200).json(`${cart.id} has been deleted`);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
