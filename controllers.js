angular.module('tagoreApp.controllers', ['tagoreApp.services', 'tagoreApp.directives','ui.bootstrap', 'ngDragDrop'])

	.controller('PoemsCtrl', ['$scope', 'PoemService', function($scope, PoemService) {
	  console.log('poems controller working')
	  $scope.poems = PoemService.all()
	  

	}])

	.controller('CreateCtrl', ['$scope', 'PoemService', 'WordService', function($scope, PoemService, WordService){
		console.log('poems create controller working')
		console.log('words create controller working')
				
		var numberWords = 40;
		$scope.list1 = WordService.get(numberWords);
  		$scope.list2 = [];
  		$scope.poem = {};
  		$scope.poems = PoemService.all();
		var imageUrl;

		$scope.refresh = function(numberWords) {
			console.log("refresh works")
			console.log(numberWords)
			$scope.list1 = [];
			$scope.list1 = WordService.get(numberWords);
			return $scope.list1
		}

		// $scope.randomClass = function() {
		// 	console.log("random class works")
		// 	var classes = [
		// 	"up", "upabit", "down", "downabit", "higher", "lower", "leftabit", "rightabit"]; 
		// 	function getRandom(arr, n) {
		//     	var result = new Array(n),		    
		//     	    len = arr.length,		
		//     	    taken = new Array(len);
		//     		if (n > len)
		//         		throw new RangeError("getRandom: more elements taken than available");
		//     		while (n--) {
		//         		var x = Math.floor(Math.random() * len);
		//         		result[n] = arr[x in taken ? taken[x] : x];
		//         		taken[x] = --len;
		//     		}
		//     		return result;
		// 	}
		// 	var randomClass = getRandom(classes,1);
		// 	return randomClass
		// }

		$scope.save = function() {
  			console.log("Saving poem")  			
			var can = document.getElementsByClassName("thumbnail")
			html2canvas(can, {
  					onrendered: function(canvas) {
    				imageUrl = canvas.toDataURL("image/png");
    				console.log(imageUrl)
  						$scope.poem.poemId = $scope.poems.length;
  						$scope.poem.date_created = new Date();
  						$scope.poem.image = imageUrl;
  						$scope.poem.popularity = 0;
  						$scope.poem.author = 'Manu';
  						
  						$scope.poems.push($scope.poem);
    				
    				}    				
    		})
    					
  						  

  					
			
			
		}
			
			 				

	}])
	;
