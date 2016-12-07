angular.module('gnaviApp').

  /* Prefs controller */
  controller('prefsController', function($scope, gnaviAPIservice, ngTableParams) {
    var initialize = function () {

        console.log("prefsController initialize");

        gnaviAPIservice.getGnaviPrefs()
            .then(function (response) {
                //Digging into the response to get the relevant data
                var data = response.pref;
                $scope.tableParams = new ngTableParams({
                    page: 1,            // show first page
                    count:10           // count per page
                }, {
                    total: data.length, // length of data
                    getData: function($defer, params) {
                        $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });

            })
            .catch(function(reason) {
                console.error('getGnaviPrefs error:', reason);
            })
            .finally(function() {
                console.log("finally finished getGnaviPrefs");
            });
        };

    initialize();

  });