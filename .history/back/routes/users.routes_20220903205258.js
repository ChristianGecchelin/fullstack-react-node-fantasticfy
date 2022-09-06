const express = require("express");
const cors = require("cors"); //use this
const app = express();
const router = require("express").Router();
const axios = require("axios");
app.use(cors());

let data = [];

router.get("/users", (req, res, next) => {
  data.length === 0
    ? axios
        .get("https://random-data-api.com/api/v2/users", {
          params: { size: 100 },
        })
        .then((response) => {
          data = response.data;
          res.json(response.data);
        })
        .catch((err) => console.error(err))
    : res.json(data);
});

router.get("/users/:id", (req, res, next) => {
  const { id } = req.params;
  const foundUser = data.find((user) => {
    return user.id == id;
  });
  res.json(foundUser);
});

module.exports = router;
