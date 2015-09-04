angular.module('tagoreApp.controllers', ['tagoreApp.services', 'ui.bootstrap', 'ngDragDrop'])

	.controller('PoemsCtrl', ['$scope', 'PoemService', function($scope, PoemService) {
	  console.log('poems controller working')
	  $scope.poems = PoemService.all()

	}])

	.controller('CreateCtrl', ['$scope', 'PoemService', function($scope, PoemService){
		console.log('poems create controller working')
				
	
		$scope.list1 = [{title: 'AngularJS - Drag Me'},
						{title: 'Drag me again'}
						];
  		$scope.list2 = [{}];
		

		$scope.save = function() {
  			console.log("Saving poem")  			
				var canvas  = document.getElementById("canvas");
				var dataUrl = canvas.toDataURL("image/png");
				console.log(dataUrl)

				window.open(dataUrl, "toDataURL() image", "width=600, height=200");
			



  			// html2canvas($(".thumbnail"), {
     //        	onrendered: function(canvas) {
     //            theCanvas = canvas;
     //            document.body.appendChild(canvas);

     //            // Convert and download as image 
     //            // Canvas2Image.saveAsPNG(canvas); 
     //            // $("#img-out").append(canvas);
     //            // Clean up 
     //            //document.body.removeChild(canvas);
     //        	}
     //    	})
    	}


  				

	}])
	;
