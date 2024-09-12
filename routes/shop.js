const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();
const productsController = require("../contorllers/products");

router.get("/", productsController.getAllProducts);

module.exports = router;
