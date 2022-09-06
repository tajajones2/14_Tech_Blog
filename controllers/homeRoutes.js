const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    // get all user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    //serialize data so the template can read it
    // const blogs = blogData.map((project) => project.get({ plain: true }));

    // res.send("homepage",)
    res.status(200), res.json(blogData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
          { model: User, attributes: {exclude: ["password"] } },
        // gets user data for blog and user data for comment
        
          { model: Comment,  include: [
            { model: User, attributes: { exclude: ["password"] } }
      ]},
      ],
    })

    // const blogs = blogData.map((project) => project.get({ plain: true }));

    // this is to send data back
    res.status(200).json(blogData);

    ////////
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

// router.get("/", async (req, res) => {
//   try {
//     // get all user data
//     const allUsers = await User.findAll({
//         include: []
//     });

//     res.send("hello world!")
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
