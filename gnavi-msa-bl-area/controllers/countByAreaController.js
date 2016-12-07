var Q = require("q");
var areasController = require("./areasController");
/*
  TODO_01
  Add reference to mongodbManager for mongodb connection. The following is an example:

  var mongodbManager = require('../utils/mongodbManager');

*/


/**************************************/
/* REST API controller getCountByArea */
exports.getCountByArea = function (req, res) {
/*
  TODO_02
  1. Create a connection to the mongodb collection "gnavi" and "area". The following is an example:
  
  var collections = ["col1","col2"];
  var db = mongodbManager.getConnection(collections);

  2. Pass the connection to the getCountByAreaListPromise function.
*/

  areasController.getAreasPromise()
    .then(function(areaList) {
        return getCountByAreaListPromise(areaList);
    })
    .then(function(areaCountList) {

      areaCountList.sort(function(a, b) {
          return parseFloat(b.count) - parseFloat(a.count);
      });

      res.set('Content-Type', 'application/json');
      res.send(areaCountList);
    })
    .catch(console.error)
    .done(function() {
      console.log("End: getCountByArea");
    });

};

var getCountByAreaPromise = function(area) {
/*
  TODO_04
  1. Add a function parameter for the db connection.

  2. Remove the dummy_data.

  3. Instead use mongodb connection to get the count. Below is an example:
  var query = {"code.areacode": "AREA110"};

  db.mycollection.count(query, function(err, count) {
    if(err || !count) 
    {
      d.reject(new Error(err));
    }
    else 
    {
      var jsonObj = JSON.parse({area_code: "AREA110" , area_name: "関東", count: count});

      d.resolve(jsonObj);
    }
  });

  For details reference to 
    1) mongojs API
    https://github.com/mafintosh/mongojs#dbcollectioncountquery-callback

    2) mongodb API
    http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html
*/
  var d = Q.defer();

  d.resolve({area_code: area.area_code , area_name: area.area_name, count: randomInt(1000, 5000)});

  return d.promise;
};

var getCountByAreaListPromise = function(areaList) {
/*
  TODO_03
  1. Add a function parameter for the db connection.

  2. Pass the connection to the getCountByAreaPromise function.
*/
  var d = Q.defer();

  var prom = [];
  areaList.area.forEach(function (area) {
    prom.push(getCountByAreaPromise(area));
  });


  Q.all(prom)
    .then(function (areaCountList) {
        d.resolve(areaCountList);
  });

  return d.promise;

};

/*
  TODO_05
  1. Remove the dummy function.
*/
var randomInt = function(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

/* REST API controller getCountByArea */
/**************************************/
