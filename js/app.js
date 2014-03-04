document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
 navigator.splashscreen.hide();
}

var calculator = angular.module('calculator', ['ngRoute', 'ngAnimate']);


 calculator.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/accueil.html',
      }).
      when('/profile', {
        templateUrl: 'views/profile.html',
      }).
      when('/trouversalaire', {
        templateUrl: 'views/trouversalaire.html',
      }).
      when('/trouverfacture', {
        templateUrl: 'views/trouverfacture.html',
      }).
      when('/paramscoop', {
        templateUrl: 'views/params/paramscoop.html',
      }).
      when('/simulations', {
        templateUrl: 'views/simulations.html',
      }).
      when('/convertisseur', {
        templateUrl: 'views/convertisseurht-ttc.html',
      }).
      otherwise({
        redirectTo: '/'
      });

  }])

/* calculator.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);
 */

