app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
					url: '/', 
					templateUrl: 'html/home.html',
					controller: 'mainMeanCtrl'	  	
				  })
				  .state('posts', {
				  	url: '/posts/:id',
				  	templateUrl: 'html/posts.html',
				  	controller: 'postsCtrl'
				  })	

	$urlRouterProvider.otherwise('/');

})