var app = angular.module('formvalid', []);

// Controller
app.controller('FormValidate', function($scope, $http) {
	$scope.model = {};
	$scope.onSubmit = function(valid) {
		if (valid) {
			console.log("Form was successfully submitted.");
			console.log($scope.model);

			// $http.post('https://minmax-server.herokuapp.com/register/',$scope.model).
			//    success(function(data) {
			//    	console.log(":)");
			//    }).error(function() {
			//    		console.log(":(");
			//    });
		} else {
			console.log("The form is invalid. Please check to ensure all fields are appropriately filled out!")
		}	   
	};
});