(function () {
	//start file

	var app = angular.module('thortHub', []);


	app.controller('gitHubController', ['$scope', '$http', function ($scope, $http) {

		$scope.username = "ZeroGodForce";
		$http.get("https://api.github.com/users/" + $scope.username)
			.success(function (data) {
				$scope.userData = data;

				// Get users repos
				$http.get($scope.userData.repos_url)
					.success(function (data) {
						$scope.repoData = data;
					});
			});
	}]);


	app.controller('repoSearchController', ['$scope', '$http', function ($scope, $http) {

		// Wait a bit for the user to finish typing before searching
		var pendingTask;
		$scope.change = function () {
			if (pendingTask) {
				clearTimeout(pendingTask);
			}
			pendingTask = setTimeout(fetch, 600);
		};


		// search github for the repository
		function fetch() {
			$http.get("https://api.github.com/search/repositories?q=" + $scope.searchRepo)
				.success(function (response) {
					console.log(response);
					$scope.results = response;
				});
		}

		// Search again if the input changes (user searches for something else)
		$scope.update = function (repo) {
			$scope.searchRepo = repo.full_name;
			$scope.change();
		};

		$scope.select = function () {
			this.setSelectionRange(0, this.value.length);
		}
	}]);


//end file
})();


