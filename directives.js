angular.module('tagoreApp.directives', ['tagoreApp.services', 'tagoreApp.services', 'ui.bootstrap', 'ngDragDrop'])


	.directive('myDraggable', ['$document', function($document) {
		console.log("Draggable is working LIKE A BOSS")
		return {
	    link: function(scope, element, attr) {
	      var startX = 0, startY = 0, x = 0, y = 0;

	      element.css({
	       position: 'relative',
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
	}])

	
  .directive('draggableDevice', function() {
    return {
      require: '?droppableDevice',
      restrict: 'A',
      link: function(scope, element, attrs) {
        var options = scope.$eval(attrs.draggableDevice) || {};
        element.draggable(options);
        element.draggable({
          revert: function(event, ui) {
            if(!event){
              if(element[0].className.split(" ")[1] == "floor"){
                deviceId = element[0].className.split(" ")[0].substring(7);
                if(element[0].className.substring(0,6) == "marker"){
                  scope.removeMarker(deviceId);     
                }else {
                  scope.removeSensor(deviceId);     
                }
              }else {
                element.show();
              }
            }
            return !event;
          },
          revertDuration: 0,
          start: function(event, ui) {
            if(element[0].className.substring(0, 6) == "device" || element[0].className.substring(0, 6) == "marker"){
              element.hide();
            }
          },
          stop: function(event, ui) {
            element.show();
          }
        });
      }
    }
  }).directive('droppableDevice', function() {
    return {
      restrict: 'A',
      priority: 1,
      link: function(scope, element, attrs) {
        element.droppable({
          drop: function(event, ui) {
            x = ui.helper.clone();
            deviceId = x[0].className.split(" ")[0].substring(7);
            ui.helper.remove();
            x.draggable({
              helper: 'original',
              containment: '.homeview-modal',
              tolerance: 'fit',
              revert: function(event, ui) {
                return !event;
              }
            });
            //TODO: refactor this so doesn't assume set sensor functions exist in controller
            if(ui.helper[0].className.split(" ")[1] == "undropped"){
              scope.setSensor(deviceId, ui.position.left, ui.position.top);
            }else if(ui.helper[0].className.split(" ")[1] == "floor"){
              console.log(ui.helper[0].className.substring(0,6));
              if(ui.helper[0].className.substring(0,6) == "marker"){
                console.log(2)
                scope.moveMarker(deviceId, ui.position.left, ui.position.top);
              }else{
                scope.moveSensor(deviceId, ui.position.left, ui.position.top);
              }
            }else {
              if(ui.helper[0].className.split(" ")[0] == "window_marker"){
                scope.setMarker("window", Math.round(Math.random() * 10000), ui.position.left, ui.position.top);
              }else{
                scope.setMarker("door", Math.round(Math.random() * 10000), ui.position.left, ui.position.top);
              }
            }
            scope.$apply();
          },
        });
      }
    }
  })

	;