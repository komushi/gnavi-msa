/*
  TODO_01
  Set the correct service URIs:
  var areaServiceURI = "http://gnavi-msa-bl-area.<your_cf_domain>";
  var catServiceURI = "http://gnavi-msa-bl-category.<your_cf_domain>";
  var indexServiceURI = "http://gnavi-msa-bl-index.<your_cf_domain>";

  TODO_02
  Visit the following api pages with browser:
  1. "http://gnavi-msa-bl-area.<your_cf_domain>/api"
  2. "http://gnavi-msa-bl-category.<your_cf_domain>/api"
  3. "http://gnavi-msa-bl-index.<your_cf_domain>/api"

  TODO_03
  In command line mode, use curl command to test the rest services.
  1. For get methods follow the example below.
  curl -X GET "http://gnavi-msa-bl-area.<your_cf_domain>/api/prefectures"
  2. For put and post methods follow the example below.
  curl -H "Content-Type: application/json" -X POST "http://gnavi-msa-bl-area.<your_cf_domain>/api/count_by_area_cat" -d '{"areaList":[{"area_code":"AREA130","area_name":"中部"}],"catList":[{"category_l_code":"RSFST09000","category_l_name":"居酒屋"},{"category_l_code":"RSFST02000","category_l_name":"日本料理・郷土料理"},{"category_l_code":"RSFST03000","category_l_name":"すし・魚料理・シーフード"}]}'

  TODO_04
  Implement the methods of the services.
  1. invoke the REST API methods - GET method
    gnaviAPI.getGnaviPrefs = function() {
      var deferred = $q.defer();

      $http({
        method: 'GET', 
        url: areaServiceURI + '/api/prefectures'
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status + " " + data);
      });

      return deferred.promise;
    };

  2. invoke the REST API methods - POST method
    gnaviAPI.getCountByAreaCat = function(jsonParam) {
      var deferred = $q.defer();

      $http({
        method: 'POST', 
        url: areaServiceURI + '/api/count_by_area_cat',
        data: jsonParam,
        headers: {'Content-Type': 'application/json'}
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status + " " + data);
      });

      return deferred.promise;
    };

*/

var gnaviAPIservice = function($injectHttp, $q) {


    $http = $injectHttp;

    var gnaviAPI = {};
    var areaServiceURI = "http://gnavi-msa-bl-area.cfapps.io";
    var catServiceURI = "http://gnavi-msa-bl-category.cfapps.io";
    var indexServiceURI = "http://gnavi-msa-bl-index.cfapps.io";

    gnaviAPI.getGnaviPrefs = function() {
      var deferred = $q.defer();

      $http({
        method: 'GET', 
        url: areaServiceURI + '/api/prefectures'
      })
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status + " " + data);
      });


      return deferred.promise;
    };


    gnaviAPI.getGnaviAreas = function() {
      var deferred = $q.defer();

      deferred.resolve(
        {
          "_id": "557f8aac0c2f802800235005",
          "area": [
            {
              "area_code": "AREA110",
              "area_name": "関東"
            },
            {
              "area_code": "AREA120",
              "area_name": "関西"
            },
            {
              "area_code": "AREA130",
              "area_name": "中部"
            }
          ]
        }
      );

      return deferred.promise;
    };

    gnaviAPI.getGnaviCats = function() {
      var deferred = $q.defer();

      deferred.resolve(
        {
            "_id": "557f8a860c2f802800235004",
            "category_l": [
                {
                    "category_l_code": "RSFST09000",
                    "category_l_name": "居酒屋"
                },
                {
                    "category_l_code": "RSFST02000",
                    "category_l_name": "日本料理・郷土料理"
                },
                {
                    "category_l_code": "RSFST03000",
                    "category_l_name": "すし・魚料理・シーフード"
                }
            ]
        }
      );

      return deferred.promise;
    };



    gnaviAPI.getCountByArea = function() {
      var deferred = $q.defer();

      deferred.resolve(
        [
          {
            "area_code": "AREA110",
            "area_name": "関東",
            "count": 136163
          },
          {
            "area_code": "AREA120",
            "area_name": "関西",
            "count": 65042
          },
          {
            "area_code": "AREA140",
            "area_name": "九州",
            "count": 36027
          }
        ]
      );

      return deferred.promise;
    };

    gnaviAPI.getCountByCat = function() {
      var deferred = $q.defer();

      deferred.resolve(
        [
          {
            category_l_code: "RSFST09000",
            category_l_name: "居酒屋",
            count: 53665
          },
          {
            category_l_code: "RSFST02000",
            category_l_name: "日本料理・郷土料理",
            count: 22079
          },
          {
            category_l_code: "RSFST03000",
            category_l_name: "すし・魚料理・シーフード",
            count: 25735
          }
        ]
      );

      return deferred.promise;
    };

    gnaviAPI.getCountByAreaCat = function(jsonParam) {
      var deferred = $q.defer();

      console.log(JSON.stringify(jsonParam));

      var dummy_data =
        [
          {
            "key": "関西",
            "values": [
              [
                "居酒屋",
                9142
              ],
              [
                "日本料理・郷土料理",
                3598
              ],
              [
                "すし・魚料理・シーフード",
                4354
              ]
            ]
          }
        ];
      deferred.resolve(dummy_data);

      return deferred.promise;
    };

    gnaviAPI.getCountByCatArea = function(jsonParam) {
      var deferred = $q.defer();

      console.log(JSON.stringify(jsonParam));

      var dummy_data =
        [
          {
            "key": "洋食",
            "values": [
              [
                "関東",
                2657
              ],
              [
                "関西",
                1229
              ],
              [
                "中部",
                840
              ],
              [
                "九州",
                954
              ],
              [
                "北海道",
                773
              ],
              [
                "東北",
                648
              ],
              [
                "北陸",
                498
              ],
              [
                "中国",
                562
              ],
              [
                "四国",
                228
              ],
              [
                "沖縄",
                228
              ]
            ]
          }
        ];

      deferred.resolve(dummy_data);

      return deferred.promise;
    };

    return gnaviAPI;
};


var gnaviModule = angular.module('gnaviApp.services', []);
gnaviModule.factory('gnaviAPIservice', ['$http', '$q', gnaviAPIservice]);

