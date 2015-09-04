angular.module('tagoreApp.controllers', ['tagoreApp.services', 'ui.bootstrap', 'ngDragDrop'])

	.controller('PoemsCtrl', ['$scope', 'PoemService', function($scope, PoemService) {
	  console.log('poems controller working')
	  $scope.poems = PoemService.all()

	}])

	.controller('CreateCtrl', ['$scope', 'PoemService', function($scope, PoemService){
		console.log('poems create controller working')
				
	
		$scope.list1 = [{title: 'AngularJS - Drag Me'},
						{title: 'Drag me again'},
						{title: 'Do it'}
						];
  		$scope.list2 = [{}];
  		$scope.poem = {};
  		$scope.poems = PoemService.all()
		var imageUrl;

		$scope.save = function() {
  			console.log("Saving poem")  			
			var can = document.getElementsByClassName("thumbnail")
			html2canvas(can, {
  					onrendered: function(canvas) {
    				imageUrl = canvas.toDataURL("image/png");
    				document.body.appendChild(canvas);
    				console.log(imageUrl)
  						$scope.poem.poemId = $scope.poems.length;
  						$scope.poem.date_created = new Date();
  						$scope.poem.image = imageUrl;
  						$scope.poem.popularity = 0;
  						$scope.poem.author = 'Manu';
  						
  						$scope.poems.push($scope.poem);
    				
    				}    				
    		})
    					// $scope.poem.date_created = new Date();
  						  

  					
			
			
		}
			
			 				

	}])
	;
