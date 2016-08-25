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
    .when('/aframe2', {
      templateUrl: 'app/components/aframe/aframe2.html',
      controller: 'aframeController'
    })
    .when('/advertising', {
      templateUrl: 'app/components/advertising/advertising.html'
    })
    .when('/resume', {
      templateUrl: 'app/components/resume/resume.html'
    })
    .when('/about', {
      templateUrl: 'app/components/about/about.html'
    });
}]);
