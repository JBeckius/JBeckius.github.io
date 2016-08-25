var app = angular.module('pageApp');

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/home/home.html'
    })
    .when('/aframe', {
      templateUrl: 'app/components/aframe/aframe1.html',
      controller: 'aframeController'
    })
    .when('/advertising', {
      templateUrl: 'app/components/advertising/advertising.html'
    })
}]);
