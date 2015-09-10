angular.module('tagoreApp', ['ngRoute', 'tagoreApp.controllers', 'tagoreApp.directives','ui.bootstrap', 'ngDragDrop'])

.config(['$routeProvider',
   function ($routeProvider) {
        $routeProvider
        .when('/feed', {
                templateUrl: 'templates/feed.html',
                conroller: 'PoemsCtrl'
               
            })
         $routeProvider
        .when('/', {
                templateUrl: 'templates/create.html',
                conroller: 'CreateCtrl'
            })
        $routeProvider
        .when('/', {
                templateUrl: 'templates/create.html',
                conroller: 'SaveCtrl'
            })

        .otherwise({
                redirectTo: '/'
            })

}])

;