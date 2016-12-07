/*
  TODO_01
  1. Add reference to mongodbManager for mongodb connection.

  TODO_02
  1. Create a function called "getCountByCatAreaPromise".
  2. In this function, query count from collection "gnavi" with the parameters: "area.area_code" and "cat.category_l_code".
  3. Return the result as a promise. The following is an example:
  var jsonObj = JSON.parse('["関東", 23450]');
  d.resolve(jsonObj);

  TODO_03
  1. Create a function called "getCountByCatAreaListPromise". 
  2. Iteratively pass the connection, area, category to the "getCountByCatAreaPromise" function.
  3. Aggregate the result promises as one JSON and return it as a promise. The following is an example:
  Q.all(prom)
    .then(function (catAreaCountList) {
        d.resolve(catAreaCountList);
  });

  TODO_04
  1. Create a function called "getCountByCatListAreaListPromise". 
  2. Iteratively pass the connection, area list, category to the "getCountByCatAreaListPromise" function.
  3. Aggregate the result promises as one JSON and return it as a promise.

  TODO_05
  1. Create a function called "getCountByCatArea".
  2. Create a connection to the mongodb collection "gnavi".
  3. Pass the connection, area list and category list to the "getCountByCatListAreaListPromise" function.
  4. Return the result from "getCountByCatListAreaListPromise" as http response.
  5. Close the connection.
  6. Export the function as "getCountByCatArea".

  TODO_06
  1. Get rid of the dummy data.

  For details, please reference to business_logic_layer_area/controller/countByAreaCatController.js.
*/

var Q = require("q");
var dummy_data = require('../dummy_data/count_by_cat_area.js');

/*****************************************/
/* REST API controller getCountByCatArea */
exports.getCountByCatArea = function (req, res) {


  var dataArray = [];
  dataArray.push(dummy_data.data1);
  dataArray.push(dummy_data.data2);
  dataArray.push(dummy_data.data3);
  dataArray.push(dummy_data.data4);
  dataArray.push(dummy_data.data5);
  dataArray.push(dummy_data.data6);

  res.set('Content-Type', 'application/json');
  res.send(dataArray[randomIntInc(0, 5)]);

};

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
/* REST API controller getCountByCatArea */
/*****************************************/
