angular.module('tagoreApp.directives', ['tagoreApp.services', 'tagoreApp.services', 'ui.bootstrap', 'ngDragDrop'])


	.directive('myDraggable', ['$document', function($document) {
		console.log("Draggable is working LIKE A BOSS")
		return {
	    link: function(scope, element, attr) {
	      var startX = 0, startY = 0, x = 0, y = 0;

	      element.css({
	       // position: 'relative',
	       // border: '1px solid black',
	       // backgroundColor: 'white',
	       cursor: 'pointer'
	      });

	      element.on('mousedown', function(event) {
	        // Prevent default dragging of selected content
	        event.preventDefault();
	        startX = event.pageX - x;
	        startY = event.pageY - y;
	        $document.on('mousemove', mousemove);
	        $document.on('mouseup', mouseup);
	      });

	      function mousemove(event) {
	        y = event.pageY - startY;
	        x = event.pageX - startX;
	        element.css({
	          top: y + 'px',
	          left:  x + 'px'
	        });
	      }

	      function mouseup() {
	        $document.off('mousemove', mousemove);
	        $document.off('mouseup', mouseup);
	      }
	    }
	  };
	}]);

	;