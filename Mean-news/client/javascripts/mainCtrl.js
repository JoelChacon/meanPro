app.controller("mainMeanCtrl", function($scope, postsFactory) {

 //*1*/$scope.posts = [];

 /*1.5*/$scope.posts = postsFactory.posts	

   /*2*/$scope.addPost = function() {

		if(!$scope.title || $scope.title === '') {
			return;
		}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
			comments: []
		})

		$scope.title = '';
		$scope.link = '';

		};

		console.log($scope.posts);
		
   /*3*/$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		}
   /*4*/$scope.url = {
        	text: 'joelchacon.com'
      	};

});
