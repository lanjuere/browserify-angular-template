var Dummy = require('./beans/Dummy');
require('./views/Views');

var dummy = new Dummy();
dummy.sayHello();

var app = angular.module("app", ['Views']);


app.controller('test', ['$scope', function ($scope) {
    $scope.hello = "Ca marche a merveille !!!!!";
}]);

