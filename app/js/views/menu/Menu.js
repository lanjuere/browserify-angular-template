/**
 * Created by lionel on 05/11/2015.
 */

var menuDirective = require('./MenuDirective');

var menu = angular.module('Menu', []);
menu.directive('lanMenu', ['$log', menuDirective]);

module.exports = menu;