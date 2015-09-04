angular.module('tagoreApp', ['ngRoute', 'tagoreApp.controllers', 'ui.bootstrap', 'ngDragDrop'])

.config(['$routeProvider',
   function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                conroller: 'PoemsCtrl'
               
            })
         $routeProvider.
            when('/create', {
                templateUrl: 'templates/create.html',
                conroller: 'CreateCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

}])