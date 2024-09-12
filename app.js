const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./contorllers/error");
//app inititalization
const app = express();
//view engines

app.set("view engine", "ejs");
app.set("views", "views");
//import routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//parsing data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//using routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);
//error Controller
app.use(errorController.errorPage);

app.listen(6500);
