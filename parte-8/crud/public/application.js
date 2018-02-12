var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(
        mainApplicationModuleName,
        ['ngResource', 'ngRoute', 'users', 'example', 'articles']
        );
/*
The ngResource module, provides  an easy way to communicate with a RESTful data
source by presenting a factory, which creates an ngResource object
that can handle the basic routes of a RESTful resource.
*/
mainApplicationModule.config(['$locationProvider',
  function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function () {
  angular.bootstrap(document, [mainApplicationModuleName]);
});