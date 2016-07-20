app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
					url: '/', 
					templateUrl: 'html/home.html',
					controller: 'mainMeanCtrl'	  	
				  });

	$urlRouterProvider.otherwise('/');

})