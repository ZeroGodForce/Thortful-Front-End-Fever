//(function () {
//	'use strict';
//
///**
// * @ngdoc function
// * @name userSearchController
// * @description
// * Controller of thortHub
// */
//	var app = angular.module('thortHub', [])
//	app.controller('userSearchController', ['$scope', '$http', function ($scope, $http) {
//
//		$scope.username = "ZeroGodForce";
//		$http.get("https://api.github.com/users/" + $scope.username)
//			.success(function (data) {
//				$scope.userData = data;
//
//				// Get users repos
//				$http.get($scope.userData.repos_url)
//					.success(function (data) {
//						$scope.repoData = data;
//					});
//			});
//	}]);
//}());