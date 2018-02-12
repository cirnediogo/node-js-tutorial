/*
Creating a variable containing the main application's module name.
*/
var mainApplicationModuleName = 'mean';
/*
Creating the main application module following the angular.module() method.
*/
var mainApplicationModule = angular.module(mainApplicationModuleName, []);
/*
Using the angular object jqLite functionality to bind a function to the 
document-ready event.
*/
angular.element(document).ready(function () {
  /*
  Using the angular.bootstrap() method to initiate a new AngularJS 
  application using the main application module.
  */
  angular.bootstrap(document, [mainApplicationModuleName]);
});


