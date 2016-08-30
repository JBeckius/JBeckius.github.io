var app = angular.module("pageApp");
app.directive('customNav', function() {
  return {
    restrict: 'AE',
    templateUrl: 'app/shared/nav/customNav.html'
  }
});
