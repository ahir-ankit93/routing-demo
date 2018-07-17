let app= angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/home",{
        templateUrl:"views/home.html"
    }).
    when("/register",{
        templateUrl:"views/register.html"
    }).
    when("/about",{
        templateUrl:"views/about.html"
    }).
    when("/contact",{
        templateUrl:"views/contact.html"
    }).otherwise({
        redirectTo:"/home"
    })
});

app.controller ("myAppCtrl",function($scope,$http){
    
    // $http.get("https://api.github.com/users").then(function(item){
    // $http.get("data.json").then(function(item){
    //     $scope.players=item.data;
    // })
})