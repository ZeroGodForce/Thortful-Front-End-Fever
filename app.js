(function(){
    //start file

    var app = angular.module('thortHub', []);



    app.controller('gitHubController', ['$scope','$http', function($scope,$http) {

        $scope.username = "ZeroGodForce";
        $http.get("https://api.github.com/users/"+$scope.username)
            .success(function(data) {
                //console.log(data);
                $scope.userData = data;



                $http.get($scope.userData.repos_url)
                    .success(function(data){
                        $scope.repoData = data;
                    });

            });


    }]);


    app.controller('repoSearchController', ['$scope','$http', function($scope,$http) {


        //if($scope.searchRepo === undefined){
        //    $scope.searchRepo = "bootstrap";
        //    fetch();
        //}



        var pendingTask;

        $scope.change = function(){
            if(pendingTask) {
                clearTimeout(pendingTask);
            }
            pendingTask = setTimeout(fetch, 800);
        };



        function fetch() {
            //$http.get("http://www.omdbapi.com/?t=" +
            //$scope.search + "&tomatoes=true&plot=full")
            //    .success(function(response){$scope.details = response;});
            //
            //$http.get("http://www.omdbapi.com/?s=" + $scope.search)
            //    .success(function(response){$scope.related = response;});



            $http.get("https://api.github.com/search/repositories?q="+$scope.searchRepo)
                .success(function(response) {
                    console.log(response);
                    $scope.results = response;
                });


        }

        $scope.update = function(repo){
            $scope.searchRepo = repo.full_name;
            $scope.change();
        };

        $scope.select = function(){
            this.setSelectionRange(0, this.value.length);
        }

    }]);













//end file
})();


