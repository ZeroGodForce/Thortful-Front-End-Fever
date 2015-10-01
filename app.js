(function(){
    var user = {username: 'helloworld'};
    var app = angular.module('thortHub', []);
    app.controller('SearchController', function(){
        this.usersearch = user;
    });
})();