angular.module('tagoreApp.controllers', ['tagoreApp.services', 'ui.bootstrap'])

	.controller('PoemsCtrl', ['$scope', 'PoemService', function($scope, PoemService) {
	  console.log('poems controller working')
	  $scope.poems = PoemService.all()

	}])

	.controller('CreateCtrl', ['$scope', 'PoemService', function($scope, PoemService){
		console.log('poems create controller working')
				
	
		$scope.list1 = {title: 'AngularJS - Drag Me'};
  		$scope.list2 = {};
		

		$scope.submit = function() {
  			$scope.poem.date_created = new Date();
  			$scope.poem.id = $scope.itins.length;
  			$scope.poems.push($scope.poem); 
  			// $('#myModal').modal('hide');   
  		// $scope.itin = ''
  			}	

	}])






	;
