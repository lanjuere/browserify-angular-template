/**
 * Created by lionel on 05/11/2015.
 */

var menuDirective = require('./MenuDirective');

var menu = angular.module('Menu', []);
menu.directive('lanMenu', [menuDirective]);

module.exports = menu;