(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Dummy = require('./beans/Dummy');
require('./views/Views');

var dummy = new Dummy();
dummy.sayHello();

var app = angular.module("app", ['Views']);


app.controller('test', ['$scope', function ($scope) {
    $scope.hello = "Ca marche a merveille !!!!!";
}]);


},{"./beans/Dummy":2,"./views/Views":3}],2:[function(require,module,exports){
function Dummy() {
    var self = this;

    self.sayHello = function () {
        return "hello";
    };
}

module.exports = Dummy;
},{}],3:[function(require,module,exports){
/**
 * Created by lionel on 05/11/2015.
 */
require('./menu/Menu');
//require('./dummy_view/DummyView');


//var views = angular.module('Views', ['Menu', 'DummyView']);
var views = angular.module('Views', ['Menu']);

module.exports = views;
},{"./menu/Menu":4}],4:[function(require,module,exports){
/**
 * Created by lionel on 05/11/2015.
 */

var menuDirective = require('./MenuDirective');

var menu = angular.module('Menu', []);
menu.directive('lanMenu', ['$log', menuDirective]);

module.exports = menu;
},{"./MenuDirective":5}],5:[function(require,module,exports){
/**
 * Created by lionel on 05/11/2015.
 */
var MenuDirective = function ($log) {

    var self = {};

    self.templateUrl = "app/js/views/menu/menu.html";
    self.link = function (scope, element, attr) {
        //Do stuff here
        for (var i = 0; i < 10; i++) {
            $log.log("hello !!!");
        }
    };

    return self;
};

module.exports = MenuDirective;

},{}]},{},[1]);
