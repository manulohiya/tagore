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
		var backgroundColors =["#1abc9c", "#2ecc71", "#3498db", "#9b59b6","#16a085","#27ae60","#2980b9","#8e44ad","#e67e22", "#f39c12","#e74c3c","#c0392b"];

		var randomColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
		console.log(randomColor)
		 $(".fridge").css('background-color', randomColor);

		var classes =["up", "upabit", "down", "downabit","higher","lower","leftabit","rightabit"]; 
		var magnets = [];
		magnets = $("p")
		console.log(magnets)




		$scope.refresh = function(numberWords) {
			console.log("refresh works")
			console.log(numberWords)
			$scope.list1 = [];
			$scope.list1 = WordService.get(numberWords);
			return $scope.list1
		}

		$scope.save = function() {
  			console.log("Saving poem")  			
			var can = document.getElementsByClassName("fridge")
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
