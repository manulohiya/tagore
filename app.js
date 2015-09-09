angular.module('tagoreApp', ['ngRoute', 'tagoreApp.controllers', 'tagoreApp.directives','ui.bootstrap', 'ngDragDrop'])

.config(['$routeProvider',
   function ($routeProvider) {
        $routeProvider
        .when('/', {
                templateUrl: 'templates/home.html',
                conroller: 'PoemsCtrl'
               
            })
         $routeProvider
        .when('/create', {
                templateUrl: 'templates/create.html',
                conroller: 'CreateCtrl'
            })
        $routeProvider
        .when('/create', {
                templateUrl: 'templates/create.html',
                conroller: 'SaveCtrl'
            })

        .otherwise({
                redirectTo: '/'
            })

}])

;