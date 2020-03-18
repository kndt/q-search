const express = require("express");
const { ping, search } = require("../controllers");
const router = express.Router();

router.get("/ping", ping);

router.get("/search/:term", search);

module.exports = router;
