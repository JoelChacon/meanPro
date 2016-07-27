app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
					url: '/', 
					templateUrl: '../../views/home.ejs',
					controller: 'mainMeanCtrl'	  	
				  })
				  .state('posts', {
				  	url: '/posts/:id',
				  	templateUrl: '../../views/posts.ejs',
				  	controller: 'postsCtrl'
				  }); 

	$urlRouterProvider.otherwise('/');

})