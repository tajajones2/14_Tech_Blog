const { Comment } = require("../models");

const commentData = [
  {
    description: "This is so cool!",
    date: "08/28/2022",
    user_id: "1",
    blog_id: "1",
  },
];

const comments = () => Comment.bulkCreate(commentData);

module.exports = comments;
