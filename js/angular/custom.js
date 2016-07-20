var app = angular.module("pageApp", []);
app.directive('customNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/angular/directives/customNav.html'
  }
});
