angular.module('OWMApp', ['ngRoute'])
	.value('owmCities',
		['New York', 'Dallas', 'Chicago'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : './home.html',
            controller : 'HomeCtrl'
        })
        // .when('/error',{
        // 	template : '<p> Error page not Found </p>'
        // })
        .when('/cities/:city', {
        	templateUrl : './city.html',
        	controller : 'CityCtrl',
        	resolve : {
        		city: function(owmCities, $route, $location) {
        			var city = $route.current.params.city;
        				if(owmCities.indexOf(city) == -1) {
        					$location.path('/error');
        					return;
        				}
        					return city;
        		}
        	}
        })
        .when('/error', {
        	template : '<p>Error page not found </p>'
        });
    })
    .controller('HomeCtrl', function($scope) {
        //empty for now
    })
    .controller('CityCtrl', function($scope, city) {
    	$scope.city = city;
    	// var city = $routeParams.city;
    	// if(ownCities.indexOf(city) == -1) {
    	// 	return;
    	// }
    });


    