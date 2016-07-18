//initiating an angularJS app
					   //name of app//
var app = angular.module('meanApp', []);

app.controller("mainMeanCtrl", function($scope) {
			//array of objects//
  /*#1*/$scope.posts = [

		{title: 'post 1', upvotes: 5},
		{title: 'post 2', upvotes: 2},
		{title: 'post 3', upvotes: 9},
		{title: 'post 4', upvotes: 15},
		{title: 'post 5', upvotes: 4}

	];
	// begin function //
  /*#2*/$scope.addPost = function() {

		if(!$scope.title || $scope.title === '') {
			return;
		}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0
		})
		$scope.title = '';
		$scope.link = '';

		};
		console.log($scope.posts);
	// end function //
  /*#3*/$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	}


});
