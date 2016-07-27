app.controller('postsCtrl', function($scope, $stateParams, postsFactory) {

   /*1*/$scope.post = postsFactory.posts[$stateParams.id]

   /*2*/$scope.addComment = function(){
			if($scope.body === '') { return; }
			$scope.post.comments.push({
			    body: $scope.body,
			    author: 'user',
			    upvotes: 0
		    });
		    $scope.body = '';
		};

   /*3*/$scope.incrementUpvotes = function(comment) {
			comment.upvotes += 1;
		}

})