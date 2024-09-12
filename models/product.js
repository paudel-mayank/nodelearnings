const fs = require("fs");
const path = require("path");
const products = [];
var p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");
const getProuctsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
};
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    // var p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
    //   if (!err) {
    //     products = JSON.parse(fileContent);
    //     products.push(this);
    //   }
    //   fs.writeFile(p, JSON.stringify(products), (err) => {
    //     console.log(err, "err");
    //   });
    // });
    getProuctsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err, "err");
      });
    });

    // products.push(this);
  }
  static fetchAll(cb) {
    // var p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");
    //   fs.readFile(p, (err, fileContent) => {
    //     if (!err) {
    //       return cb(JSON.parse(fileContent));
    //     } else return cb([]);
    //   });
    // }
    getProuctsFromFile(cb);
  }
};
