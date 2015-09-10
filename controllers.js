angular.module('tagoreApp.controllers', ['tagoreApp.services', 'tagoreApp.directives','ui.bootstrap', 'ngDragDrop'])

	.controller('PoemsCtrl', ['$scope','PoemService', function($scope,PoemService) {
	  console.log('poems controller working')
	  
	  	Parse.initialize("oGCYEbVZgJuO7tuT3BLgAWVj5SshPjpKeCcHHhkd", "lfBiS97mRm3yANW89ZqZUaGPBTL5UVPjvXp2Jvoq");



	  	var PoemObject = Parse.Object.extend("PoemObject");
	 //  	var queryObject = new Parse.Query(PoemObject);
	 //  	console.log('query obj: ', queryObject);
		// console.log('poem object k: ', PoemObject)
		var query = new Parse.Query(PoemObject);
		// var query = PoemObject.get('poemId');
		poem = {};
  		$scope.poems = [];

		// console.log("query: ",query)
		query.find({
  			success: function(results) {
  				// console.log(results)
  				$scope.$apply(function() {
		    		//var temp = [];
		    		 for (var i = 0; i < results.length; i++) {
	      				var object = results[i];
	      			// angular.forEach(results, function(object, i){
	      					poem = {}
							poem.poemId = object.get('poemId')
							poem.date_created = object.get('createdAt')

  							poem.image = object.get('image')
	  						poem.popularity = object.get('popularity')
	  						poem.author = object.get('author')
							// console.log(poem)
							
							$scope.poems.push(poem)
							// console.log(temp)
	  
    				}
    				// console.log(temp)
	      			//$scope.poems.push(temp)
    				// console.log("Poems being saved in scope.poems: ",$scope.poems)
    				
    				
    			})
    			

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
  		// $scope.poems = PoemService.all();
		var imageUrl;
		var backgroundColors =["#1abc9c", "#2ecc71", "#3498db", "#9b59b6","#16a085","#27ae60","#2980b9","#8e44ad","#e67e22", "#f39c12","#e74c3c","#c0392b"];

		var randomColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
		console.log(randomColor)
		 $(".fridge").css('background-color', randomColor);
		  
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
		
	}])

	.controller('SaveCtrl', ['$scope', 'PoemService', 'WordService', '$window', function($scope, PoemService, WordService, $window){
		
	  	// $scope.poems = $rootScope.poems
	  		Parse.initialize("oGCYEbVZgJuO7tuT3BLgAWVj5SshPjpKeCcHHhkd", "lfBiS97mRm3yANW89ZqZUaGPBTL5UVPjvXp2Jvoq");

	  	var PoemObject = Parse.Object.extend("PoemObject");
		
		var query = new Parse.Query(PoemObject);
		var poem = {};
  		$scope.poems = []

		// console.log("query: ",query)
		query.find({
  			success: function(results) {
  				$scope.$apply(function() {
	    		// console.log(results.length)
		    		for (var i = 0; i < results.length; i++) {
	      				var poem = {};
	      				var object = results[i];
	      				// console.log(object)
	      				// var image = object.get('image');
	      				poem.poemId = object.get('poemId')
	  					poem.date_created = new Date()
	  					poem.image = object.get('image')
	  					// console.log("Image URL: "+poem.image)
	  					poem.popularity = object.get('popularity')
	  					poem.author = object.get('author')
	  						
	  					$scope.poems.push(poem);
		
    				}

    			})
    			// console.log($scope.poems)

    		}
	    
		})


	  	// console.log("All Poems: ", $scope.poems)
	  	// $scope.poem =[]
	  	
	  	
	  	$scope.addImage = function() {

		  	Parse.initialize("oGCYEbVZgJuO7tuT3BLgAWVj5SshPjpKeCcHHhkd", "lfBiS97mRm3yANW89ZqZUaGPBTL5UVPjvXp2Jvoq");

		  	$(".fridge").addClass('animated tada');
			var can = document.getElementsByClassName("fridge");
			var imgurUrl;
			html2canvas(can, {
  				onrendered: function(canvas) {
    			
    				try {
    					var imageUrl = canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
						} 
					catch(e) {
   				 		var imageUrl = canvas.toDataURL().split(',')[1];
					}
				
					$.ajax({
					    url: 'https://api.imgur.com/3/image',
					    type: 'post',
					    headers: {
					        Authorization: 'Client-ID f80bd8e4fd0e7e4'
					    },
					    data: {
					        image: imageUrl
					    },
					    dataType: 'json',
					    success: function(response) {
					        if(response.success) {
					            imgurUrl = response.data.link;
					            // console.log(imgurUrl)
					            console.log("image url: ",imgurUrl)

	  							var PoemObject = Parse.Object.extend("PoemObject");
								var poemObject = new PoemObject();
								poemObject.save(
						
									{poemId: $scope.poems.length, 
									popularity: 0,
									author: $scope.name || 'unknown',
									image: imgurUrl
									});
								// Redirect to feed
								$window.location.href = "#/feed";
									
	    					}   
					     
					    }
					    
					});

    			}
			})

		}
	
	}])
	
;
