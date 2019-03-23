// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// create the code that will call the ORM functions
// using burger specific input for the ORM.
var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  // },
  // delete: function (condition, cb) {
  //   orm.delete("burgers", condition, function (res) {
  //     cb(res);
  //   });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
