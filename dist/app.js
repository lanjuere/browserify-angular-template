(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Dummy = require('./js/beans/Dummy');
require('./js/views/Views');

new Dummy().sayHello();

var app = angular.module("app", ['Views']);


app.controller('test', ['$scope', function ($scope) {
    $scope.hello = "Ca marche a merveille !!!!!";
}]);


},{"./js/beans/Dummy":2,"./js/views/Views":3}],2:[function(require,module,exports){
function Dummy() {
    var self = this;

    self.sayHello = function () {
        console.log("hello");
    };
}

module.exports = Dummy;
},{}],3:[function(require,module,exports){
/**
 * Created by lionel on 05/11/2015.
 */
require('./menu/Menu');
require('./dummy_view/DummyView');


var views = angular.module('Views', ['Menu', 'DummyView']);

module.exports = views;
},{"./dummy_view/DummyView":4,"./menu/Menu":6}],4:[function(require,module,exports){
/**
 * Created by lionel on 05/11/2015.
 */

var DummyViewDirective = require('./DummyViewDirective');

var dummyView = angular.module('DummyView', []);
dummyView.directive('lanDummyView', [DummyViewDirective]);

module.exports = dummyView;
},{"./DummyViewDirective":5}],5:[function(require,module,exports){
/**
 * Created by lionel on 05/11/2015.
 */
var DummyViewDirective = function () {

    var self = {};

    self.templateUrl = "app/js/views/dummy_view/dummy_view.html";
    self.link = function (scope, element, attr) {
        //Do stuff here
    };

    return self;
};

module.exports = DummyViewDirective;

},{}],6:[function(require,module,exports){
/**
 * Created by lionel on 05/11/2015.
 */

var menuDirective = require('./MenuDirective');

var menu = angular.module('Menu', []);
menu.directive('lanMenu', [menuDirective]);

module.exports = menu;
},{"./MenuDirective":7}],7:[function(require,module,exports){
/**
 * Created by lionel on 05/11/2015.
 */
var MenuDirective = function () {

    var self = {};

    self.templateUrl = "app/js/views/menu/menu.html";
    self.link = function (scope, element, attr) {
        //Do stuff here
    };

    return self;
};

module.exports = MenuDirective;

},{}]},{},[1])