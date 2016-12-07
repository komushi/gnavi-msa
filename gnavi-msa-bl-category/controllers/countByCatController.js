/*
  TODO_01
  1. Add reference to mongodbManager for mongodb connection.
  2. Add reference to catsController.

  TODO_02
  1. Create a function called "getCountByCatPromise".
  2. In this function, query count from collection "gnavi" with the parameter: "cat.category_l_code".
  3. Return the result as a promise. The following is an example:
  d.resolve({category_l_code: "RSFST01000" , category_l_name: "和食", count: 7860});

  TODO_03
  1. Create a function called "getCountByCatListPromise". 
  2. Iteratively pass the connection, area, category to the "getCountByCatPromise" function.
  3. Aggregate the result promises as one JSON and return it as a promise. The following is an example:
  Q.all(prom)
    .then(function (catCountList) {
        d.resolve(catCountList);
  });

  TODO_04
  1. Create a function called "getCountByCat".
  2. Create a connection to the mongodb collections "gnavi", "category".
  3. Pass the connection to the "catsController.getCategoriesPromise" function.
  4. Pass the result category list to "getCountByCatListPromise".
  4. Return the result from "getCountByCatListPromise" as http response.
  5. Close the connection.
  6. Export the function as "getCountByCat".


  TODO_06
  1. Get rid of the dummy data.
  
  For details, please reference to business_logic_layer_area/controller/countByAreaController.js.
*/


var Q = require("q");
var dummy_data = require('../dummy_data/count_by_category.js');

/*************************************/
/* REST API controller getCountByCat */
exports.getCountByCat = function (req, res) {

  res.set('Content-Type', 'application/json');
  res.send(dummy_data);
};

/* REST API controller getCountByCat */
/*************************************/
