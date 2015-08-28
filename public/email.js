var app = angular.module('email',[]);
	app.controller('emailController',['$scope','$http',function($scope,$http){
		$scope.emailData={}
		//initialize the form
		//clearForm function clears the data 
		$scope.clearForm = function(){
				$scope.emailData={};
				
				}
		$scope.sendEmail = function(){
						console.log($scope.emailData);
						$http.post('email/api/save',{email:$scope.emailData.email,text:$scope.emailData.message,name:$scope.emailData.name,subject:$scope.emailData.subject})
						.success(function(data)
						{
							console.log($scope.emailData.email + " was saved");
							$scope.emailData= {};
						})
						.error(function(data)
						{
							console.log("error: "+ data);
							console.log($scope.emailData.email);
							$scope.emailData={};
						});
		}
					
		

		}]);
