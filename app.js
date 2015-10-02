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













//end file
})();


