var Q = require("q");
/*
  TODO_01
  Add reference to mongodbManager for mongodb connection. The following is an example:

  var mongodbManager = require('../utils/mongodbManager');

*/
var dummy_data = require('../dummy_data/areas.js');

/********************************/
/* REST API controller getAreas */
exports.getAreas = function (req, res) {

/*
  TODO_02
  1. Create a connection to the mongodb collection "area". The following is an example:
  
  var collections = ["col1","col2"];
  var db = mongodbManager.getConnection(collections);

  2. Pass the connection to the getAreasPromise function.
*/

  getAreasPromise()
    .then(function(areaList) {
      res.set('Content-Type', 'application/json');
      res.send(areaList);
    })
    .catch(console.error)
    .done(function() {
/*
  TODO_03
  1. Close the connection. The following is an example:
  
  db.close();
*/
      console.log("End: getAreas");
    });
};

exports.getAreasPromise = function() {

  return getAreasPromise();
};

var getAreasPromise = function() {
  var d = Q.defer();
/*
  TODO_04
  1. Add a function parameter for the db connection

  2. Remove the dummy_data.

  3. Instead use mongodb connection to retrieve the area list. Below is an example:
  db.mycollection.findOne(function(err, myList) {
    if(err || !areaList) 
    {
      d.reject(new Error(err));
    }
    else 
    {
      d.resolve(areaList);
    }
  });

  For details reference to 
    1) mongojs API
    https://github.com/mafintosh/mongojs#dbcollectionfindonecriteria-projection-callback

    2) mongodb API
    http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html

*/

  d.resolve(dummy_data);

  return d.promise;
};

/* REST API controller getAreas */
/********************************/