var Dummy = require('./js/beans/Dummy');
require('./js/views/Views');

new Dummy().sayHello();

var app = angular.module("app", ['Views']);


app.controller('test', ['$scope', function ($scope) {
    $scope.hello = "Ca marche a merveille !!!!!";
}]);

