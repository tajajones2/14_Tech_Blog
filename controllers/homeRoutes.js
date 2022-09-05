const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    // get all user data
    const blogData = await Blog.findAll({
        include: [{
          model: User,
        }]
    });

  //serialize data so the template can read it
const blogs = blogData.map((project) => project.get({ plain: true }));

    // res.send("homepage",)
    res.json(blogs)


  } catch (error) {
    res.status(500).json(error);
  }
});

// router.get ("/blog", async (req, res) => {
//   if ()
//   try { const blogData = await Blog.findAll({
//     where: { user_id: },
//     include: [
//       model: User
//     ]
//   })

//   };
// })








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
