/*
The angular.module() method is used to retrieve the example module. Then, 
the AngularJS module's controller() method creates a new ExampleController 
constructor function. In the constructor function, the dependency injection 
is applied to inject the $scope object. Finally, the $scope object is used 
to define a name property, which will later be used by the view.
*/
angular.module('example').controller('ExampleController', 
['$scope', function ($scope) {
    $scope.name = 'MEAN Application';
  }]
);

/*
AngularJS team defines a scope as the glue between the view and the controller. 
Using a scope object, the controller can manipulate the model, which 
automatically propagates these changes to the view and vice versa.
*/