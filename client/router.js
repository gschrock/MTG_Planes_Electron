angular.module('router', [
  'app',
  'ngRoute',
  'ngMaterial'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'planesCtrl'
    });
});
