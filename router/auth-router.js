const express = require('express');
const router = express.Router();



router.route("/").get((req, res) => {
    res
    .status(200)
    .send("Welcome to thapa technical Mern Series Updated");
  });


  module.exports = router;