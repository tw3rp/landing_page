
var app = angular.module('todo',[]);

app.controller('mainController', ['$scope','$http', function($scope,$http) {
	$scope.formData = {};	
//when the page loads, load all the todos	
	$http.get('/todo/todos').success(function(data){
		$scope.todos = data;
		console.log(data);
	})
	.error(function(data){
		console.log("error: "+data);
	});
	$scope.createTodo = function(){
			var fat = $scope.formData;
			console.log($scope.formData);
	
		if ($scope.formData.todo != undefined && $scope.formData.todo != "" ) {
				
		  	$http.post('/todo/todos/create',fat)
				.success(function(data) {
				$scope.formData={};	
				$scope.todos =data;
				console.log(data);
		});
	
}
}

	
	$scope.deleteTodo = function(id){
		$http.delete('/todo/todos/delete/'+ id).success(function(data){
			$scope.todos =data;
			console.log(data);
		})
		.error(function(data){
		console.log("error: "+ data);
		});
	}
}]);






