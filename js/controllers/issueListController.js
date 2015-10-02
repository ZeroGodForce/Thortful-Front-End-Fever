(function () {
	'use strict';

/**
 * @ngdoc function
 * @name repoSearchController
 * @description
 * Controller of thortHub
 */
var app = angular.module('thortHub', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider.
			when("/repo/:full_name/issues/", {
				templateUrl: "partials/open_issues.html",
				controller: "issueListController"
			});
	});


	app.controller('issueListController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		console.log($routeParams);

		$scope.full_name = $routeParams.full_name;

		// search github for the repository
		function fetch() {
			$http.get("https://api.github.com/repos/" + $scope.full_name + "/issues")
				.success(function (response) {
					$scope.results = response;
				});
		}

		// Search again if the input changes (user searches for something else)
		//$scope.update = function (repo) {
		//	$scope.searchRepo = repo.full_name;
		//	$scope.change();
		//};

		$scope.select = function () {
			this.setSelectionRange(0, this.value.length);
		}
	}]);
}());