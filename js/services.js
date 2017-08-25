angular.module('starter.factory', [])
    .factory('services', ['$http', function($http) {
        return {
            search: function(searchText, $scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/search?key=91015fac483bb4e604a9f6e9c35a881c&q=" + searchText
                }).then(function successCallback(response) {
                    $scope.searchList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getBeerByAvailability: function(id, $scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/beers?key=91015fac483bb4e604a9f6e9c35a881c&availableId=" + id
                }).then(function successCallback(response) {
                    $scope.beerList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getBeerByGlassware: function(id, $scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/beers?key=91015fac483bb4e604a9f6e9c35a881c&glasswareId=" + id
                }).then(function successCallback(response) {
                    $scope.beerList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },


            getBeerByColor: function(id, $scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/beers?key=91015fac483bb4e604a9f6e9c35a881c&srmId=" + id
                }).then(function successCallback(response) {
                    $scope.beerList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getBeersByStyles: function(styleid, $scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/beers?key=91015fac483bb4e604a9f6e9c35a881c&styleId=" + styleid
                }).then(function successCallback(response) {
                    $scope.beerList = response.data.data;
                    $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },


            getAllBeersBy: function($scope, name) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/menu/" + name + "?key=91015fac483bb4e604a9f6e9c35a881c"
                }).then(function successCallback(response) {
                    $scope.items = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getStylesMenu: function($scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/menu/styles?key=91015fac483bb4e604a9f6e9c35a881c"
                }).then(function successCallback(response) {
                    $scope.stylesList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getCategoriesMenu: function($scope) {

               /* $.getJSON("http://api.brewerydb.com/v2/menu/categories?key=91015fac483bb4e604a9f6e9c35a881c", function(result){
             $scope.categoriesList = result.data;
                     $scope.loading=false;
            });*/
      
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/menu/categories?key=91015fac483bb4e604a9f6e9c35a881c"
                }).then(function successCallback(response) {
                    $scope.categoriesList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getGlasswareMenu: function($scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/menu/glassware?key=91015fac483bb4e604a9f6e9c35a881c"
                }).then(function successCallback(response) {
                    $scope.glasswareList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getSrmColorMenu: function($scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/menu/srm?key=91015fac483bb4e604a9f6e9c35a881c"
                }).then(function successCallback(response) {
                    $scope.colorsList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getBeeravailabilityMenu: function($scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/menu/beer-availability?key=91015fac483bb4e604a9f6e9c35a881c"
                }).then(function successCallback(response) {
                    $scope.beeravailabilityList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },




            getCountriesMenu: function($scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/menu/countries?key=91015fac483bb4e604a9f6e9c35a881c"
                }).then(function successCallback(response) {
                    $scope.countriesList = response.data.data;
                     $scope.loading=false;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },

            getIngridientsMenu: function($scope) {
                $http({
                    method: 'GET',
                    url: "http://api.brewerydb.com/v2/menu/ingredients?key=91015fac483bb4e604a9f6e9c35a881c"
                }).then(function successCallback(response) {
                     $scope.loading=false;
                    var array = [];
                    var ingridients = {};
                    var data = response.data.data;
                    data.forEach(function(a) {
                        if (array.indexOf(a.category) == -1) {
                            array.push(a.category);
                        }
                    });


                    array.forEach(function(category) {
                        ingridients[category] = [];
                        data.forEach(function(item) {
                            if (item.category === category) {
                                ingridients[category].push(item);
                            }
                        });
                    });


                    $scope.ingridientsCategories = array;
                    $scope.ingridientsData = ingridients;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            },
        };
    }]);