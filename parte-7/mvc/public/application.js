var mainApplicationModuleName = 'mean';
/*
Adding the example and AngularJS ngRoute modules as dependencies of the main application module.
AngularJS ngRoute module allows the application to define URL paths and their corresponding 
templates, which will be rendered whenever the user navigates to those paths.
*/
var mainApplicationModule = angular.module(
        mainApplicationModuleName,
        ['ngRoute', 'example']
        );

/*
The ngRoute uses the URL hash part for in-page routing so that, when the hash part changes, 
the browser will not make a request to the server.
However, single-page applications are not indexable by search engine crawlers. To solve this 
issue, the major search engine makers offer developers a way to mark their application as a
single-page application. To do that, there is a routing scheme called Hashbangs (adding "!").
*/
mainApplicationModule.config(['$locationProvider',
  function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

angular.element(document).ready(function () {
  angular.bootstrap(document, [mainApplicationModuleName]);
});