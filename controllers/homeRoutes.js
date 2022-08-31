const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll({});
  } catch (error) {
    res.status(500).json(err);
  }
});
