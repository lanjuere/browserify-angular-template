/**
 * Created by lionel on 05/11/2015.
 */

var DummyViewDirective = require('./DummyViewDirective');

var dummyView = angular.module('DummyView', []);
dummyView.directive('lanDummyView', [DummyViewDirective]);

module.exports = dummyView;