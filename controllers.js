angular.module('tagoreApp.controllers', ['tagoreApp.services', 'tagoreApp.directives','ui.bootstrap', 'ngDragDrop'])

	.controller('PoemsCtrl', ['$scope', 'PoemService', function($scope, PoemService) {
	  console.log('poems controller working')
	  
	  	Parse.initialize("oGCYEbVZgJuO7tuT3BLgAWVj5SshPjpKeCcHHhkd", "lfBiS97mRm3yANW89ZqZUaGPBTL5UVPjvXp2Jvoq");

	  	var PoemObject = Parse.Object.extend("PoemObject");
		
		var query = new Parse.Query(PoemObject);
		$scope.poem = {}
  		$scope.poems = []

		console.log("query: ",query)
		query.find({
  			success: function(results) {
  				$scope.$apply(function() {
	    		console.log(results.length)
		    		for (var i = 0; i < results.length; i++) {
	      				var object = results[i];
	      				console.log(object)
	      				// var image = object.get('image');
	      				$scope.poem.poemId = i
	  					$scope.poem.date_created = object.createdAt
	  					$scope.poem.image = object.get('image')
	  					$scope.poem.popularity = object.get('popularity')
	  					$scope.poem.author = object.get('author')
	  						
	  					$scope.poems.push($scope.poem);
		
    				}

    			})
    			console.log($scope.poems)

    		}
	    
		})


	}])

	.controller('CreateCtrl', ['$scope', 'PoemService', 'WordService',function($scope, PoemService, WordService){
		console.log('poems create controller working')
		console.log('words create controller working')
				
		

		var numberWords = 20;
		$scope.list1 = WordService.get(numberWords);
  		$scope.list2 = [];
  		$scope.poem = {};
  		$scope.poems = PoemService.all();
		var imageUrl;
		var backgroundColors =["#1abc9c", "#2ecc71", "#3498db", "#9b59b6","#16a085","#27ae60","#2980b9","#8e44ad","#e67e22", "#f39c12","#e74c3c","#c0392b"];

		var randomColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
		console.log(randomColor)
		 $(".fridge").css('background-color', randomColor);
		  // $(".fridge").css('opacity', 0.7);

		$scope.randClass = function() { 
			var classes =["up", "upabit", "down", "downabit","higher","lower","leftabit","rightabit"]; 
	 		var randomClass = classes[Math.floor(Math.random()*classes.length)];						
			console.log(randomClass)
			return randomClass
		}

	
	
		




		$scope.refresh = function(numberWords) {
			console.log("refresh works")
			console.log(numberWords)
			$scope.list1 = [];
			$scope.list1 = WordService.get(numberWords);
			return $scope.list1
		}

		$scope.screenshot = function() {
  			console.log("Taking screenshot")

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
  						$(".fridge").after(canvas)


    				}   

    		})
  						
			
		}

		

	}])

	.controller('SaveCtrl', ['$scope', 'PoemService', 'WordService',function($scope, PoemService, WordService){
		
	  	$scope.poems = PoemService.all()
	  	$scope.poem =[]
	  	console.log($scope.poems.length)
	  	
	  	$scope.addImage = function() {

		  	Parse.initialize("oGCYEbVZgJuO7tuT3BLgAWVj5SshPjpKeCcHHhkd", "lfBiS97mRm3yANW89ZqZUaGPBTL5UVPjvXp2Jvoq");

		  	// 		var TestObject = Parse.Object.extend("TestObject");
					// var testObject = new TestObject();
					// testObject.save({foo: "bar"}).then(function(object) {
		  	// 		alert("yay! it worked");
					// });

			var can = document.getElementsByClassName("fridge");
			html2canvas(can, {
  				onrendered: function(canvas) {
    			imageUrl = canvas.toDataURL("image/png");
    			console.log(imageUrl)
  					
  				var PoemObject = Parse.Object.extend("PoemObject");
				var poemObject = new PoemObject();
				poemObject.save(
					
					{poemId: $scope.poems.length, 
					popularity: 0,
					author: 'Manu',
					image: 'http://www.funchap.com/wp-content/uploads/2014/05/help-dog-picture.jpg'
					})
					
  				$(".fridge").after(canvas)
    				}   
    			// $scope.poem.poemId = $scope.poems.length;
  					// 	$scope.poem.date_created = new Date();
  					// 	$scope.poem.image = imageUrl;
  					// 	$scope.poem.popularity = 0;
  					// 	$scope.poem.author = 'Manu';
  						
  					// 	$scope.poems.push($scope.poem);		


    		})
		}
	
	}])
	
;
