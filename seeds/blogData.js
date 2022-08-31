const { Blog } = require("../models");

const blogData = [
  {
    title: "Why is so important",
    description:
      "MVC allows developers to maintain a true seperation of concerns, devising their code between the model layer for data, the view layer for design and controller layer for application logic.",
    date: "08/28/2022",
    user_id: "1",
  },
];

const blogs = () => Blog.bulkCreate(blogData);

module.exports = blogs;
