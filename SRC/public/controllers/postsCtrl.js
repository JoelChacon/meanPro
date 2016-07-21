app.controller('postsCtrl', function($scope, $stateParams, postsFactory) {

	$scope.post = postsFactory.posts[$stateParams.id]

})