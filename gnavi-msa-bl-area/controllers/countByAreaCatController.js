var Q = require("q");
/*
  TODO_01
  Add reference to mongodbManager for mongodb connection. The following is an example:

  var mongodbManager = require('../utils/mongodbManager');

*/

/*****************************************/
/* REST API controller getCountByAreaCat */
exports.getCountByAreaCat = function (req, res) {
/*
  TODO_02
  1. Create a connection to the mongodb collection "gnavi". The following is an example:
  
  var collections = ["col1","col2"];
  var db = mongodbManager.getConnection(collections);

  2. Pass the connection to the getCountByAreaListCatListPromise function.
*/

  getCountByAreaListCatListPromise(req.body.areaList ,req.body.catList )
    .then(function(areaCatCountList) {
      res.set('Content-Type', 'application/json');
      res.send(areaCatCountList);
    })
    .catch(console.error)
    .done(function() {
/*
  TODO_03
  1. Close the connection. The following is an example:
  
  db.close();
*/
      console.log("End: getCountByAreaCat");
    });
  

};

var getCountByAreaCatPromise = function(area, cat) {
  var d = Q.defer();

/*
  TODO_06
  1. Add a function parameter for the db connection

  2. Remove the dummy_data.

  3. Instead use mongodb connection to get the count. Below is an example:
  var query = {"code.category_code_l.0": "RSFST01000", "code.areacode": "AREA110"};

  db.mycollection.count(query, function(err, count) {
    if(err || !count) 
    {
      d.reject(new Error(err));
    }
    else 
    {
      var jsonObj = JSON.parse('["' + 'RSFST01000' + '",' + count + ']');

      d.resolve(jsonObj);
    }
  });

  For details reference to 
    1) mongojs API
    https://github.com/mafintosh/mongojs#dbcollectioncountquery-callback

    2) mongodb API
    http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html

*/
  var jsonObj = JSON.parse('["' + cat.category_l_name + '",' + randomInt(100, 1000) + ']');

  d.resolve(jsonObj);

  return d.promise;
};

var getCountByAreaCatListPromise = function(area, catList) {
/*
  TODO_05
  1. Add a function parameter for the db connection.

  2. Pass the connection to the getCountByAreaCatPromise function.
*/
  var d = Q.defer();

  var prom = [];
  

  catList.forEach(function (cat) {
    prom.push(getCountByAreaCatPromise(area, cat));
  });    



  Q.all(prom)
    .then(function (singleAreaCatCountList) {
        console.log("singleAreaCatCountList found");
        var result = {key:area.area_name, values: singleAreaCatCountList};
        d.resolve(result);
  });

  return d.promise;

};

var getCountByAreaListCatListPromise = function(areaList, catList) {
/*
  TODO_04
  1. Add a function parameter for the db connection

  2. Pass the connection to the getCountByAreaCatListPromise function.
*/

  var d = Q.defer();

  var prom = [];
  
  areaList.forEach(function (area) {
      prom.push(getCountByAreaCatListPromise(area, catList)); 
  });


  Q.all(prom)
    .then(function (areaCatCountList) {
        console.log("areaCatCountList found");
        d.resolve(areaCatCountList);
  });

  return d.promise;

};

/*
  TODO_07
  1. Remove the dummy function.
*/
var randomInt = function(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
/* REST API controller getCountByAreaCat */
/*****************************************/