var app = angular.module('app', ['ngMaterial']);

app.controller('planesCtrl', function($scope, $http, GetPlanes){
  
  $scope.getPlanes = function() {
    GetPlanes.getPlanes()
      .then(function (data) {
        // planes data
        $scope.planes = data;
        
        var shuffled = []
        while ($scope.planes.length) {
        var indexP = Math.round(Math.random() * ($scope.planes.length - 1));
        shuffled.push($scope.planes[indexP]);
        $scope.planes.splice(indexP, 1);
      }
        $scope.planes = shuffled;
        console.log($scope.planes)
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  
  $scope.getSchemes = function() {
    GetPlanes.getSchemes()
      .then(function (data) {
        // schemes data
        $scope.schemes = data;
        
        var shuffled = []
        while ($scope.schemes.length) {
        var indexS = Math.round(Math.random() * ($scope.schemes.length - 1));
        shuffled.push($scope.schemes[indexS]);
        $scope.schemes.splice(indexS, 1);
      }
        $scope.schemes = shuffled;
        console.log($scope.schemes)
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  
  $scope.getPlanes();  
  $scope.getSchemes();

});

app.factory('GetPlanes', function ($http) {
  console.log('GETTING Plane data')
  var getPlanes = function(){
    return $http({
      method: 'GET',
      url: 'data/planes.json'
    }).then(function (resp) {
        return resp.data;
      });
  };
  
  console.log('GETTING Scheme data')
  var getSchemes = function(){
    return $http({
      method: 'GET',
      url: 'data/archenemy.json'
    }).then(function (resp) {
        return resp.data;
      });
  };
  
  return {
    getPlanes: getPlanes,
    getSchemes: getSchemes
  };
});
