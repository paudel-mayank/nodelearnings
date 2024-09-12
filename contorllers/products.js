// const products = [];
const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  //   const products = .products;
  res.render("add-product", {
    // prods: products,
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    acticeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  if (req.body.title) {
    const product = new Product(req.body.title);
    product.save();
  }
  res.redirect("/");
};
exports.getAllProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
