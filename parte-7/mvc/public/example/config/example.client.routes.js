/*
The $routeProvider object provides several methods to define AngularJS 
application routing behavior.
*/

/*
The angular.module() method is used to grab the example module and the 
config() method is executed to create a new configuration block. Then, 
DI is applied to inject the $routeProvider object to the configuration 
function.
In the view file, the ng-view directive tells the AngularJS router which 
DOM element to use to render the routing views. When the user navigates 
to a specified URL, AngularJS will render the template inside the DOM 
element marked with this directive.
*/
angular.module('example').config(['$routeProvider',
  function ($routeProvider) {
	/*
	The $routeProvider.when() method is used to define a new route. The 
	first argument of the $routeProvider.when() method is the route's 
	URL and the second one is an options object, where template's URL 
	is defined. 
	*/
	$routeProvider.when('/', {
              templateUrl: 'example/views/example.client.view.html'
            });
    /*
	The $routeProvider.otherwise() method is used to define the behavior 
	of the router when the user navigates to an undefined URL.
	*/
    $routeProvider.otherwise({
              redirectTo: '/'
            });
  }
]);