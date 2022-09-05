const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    // get all user data
    const allUsers = await User.findAll({
        include: []
    });

    res.send("hello world!")
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;


