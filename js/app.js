// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.factory'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://api.brewerydb.com/v2/**'
  ]);
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.beers', {
                url: '/beers',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/beers.html',
                        controller: 'beersCtrl'
                    }
                }
            })
            .state('app.ingridients', {
                url: '/ingridients',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/ingridients.html',
                        controller: 'beersCtrl'
                    }
                }
            })
            .state('app.beershome', {
                url: '/beershome/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/beershome.html',
                        controller: 'beersHomeCtrl'
                    }
                }
            })

            .state('app.beerColor', {
                url: '/beerColor/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/beerByColor.html',
                        controller: 'beerColorCtrl'
                    }
                }
            })

            .state('app.beerGlassware', {
                url: '/beerGlassware/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/beerByGlassware.html',
                        controller: 'beerGlasswareCtrl'
                    }
                }
            })

            .state('app.beerAvailability', {
                url: '/beerAvailability/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/beerAvailability.html',
                        controller: 'beerAvailabilityCtrl'
                    }
                }
            })  ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/beershome/1');
    });