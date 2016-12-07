/*
  TODO_01
  Add reference to mongodbManager for mongodb connection.

  TODO_02
  1. Create a function called "getCategoriesPromise".
  2. Use the mongodb connection to retrieve the category list.
  3. Export the function as "getCategoriesPromise".

  TODO_03
  1. Export a function called "getCategories".
  2. In this function, create a connection by mongodbManager.
  3. Pass the connection to the function "getCategoriesPromise".
  4. Return the result from "getCategoriesPromise" as http response.
  5. Close the connection.

  For details, please reference to business_logic_layer_area/controller/areasController.js.
*/
var Q = require("q");
var dummy_data = require('../dummy_data/categories.js');

/*************************************/
/* REST API controller getCategories */
exports.getCategories = function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(dummy_data);
};
/* REST API controller getCategories */
/*************************************/

