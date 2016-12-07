/*
  TODO_01
  Add reference to mongodbManager for mongodb connection.

  TODO_02
  1. Create a function called "getPrefecturesPromise".
  2. Use the mongodb connection to retrieve the prefecture list.
  3. Export the function as "getPrefecturesPromise".

  TODO_03
  1. Export a function called "getPrefectures".
  2. In this function, create a connection by mongodbManager.
  3. Pass the connection to the function "getPrefecturesPromise".
  4. Return the result from "getPrefecturesPromise" as http response.
  5. Close the connection.

  For details, please reference to business_logic_layer_area/controller/areasController.js.
*/

var Q = require("q");
var dummy_data = require('../dummy_data/prefectures.js');

/**************************************/
/* REST API controller getPrefectures */
exports.getPrefectures = function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(dummy_data);
};


/* REST API controller getPrefectures */
/**************************************/