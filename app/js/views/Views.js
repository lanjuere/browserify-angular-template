/**
 * Created by lionel on 05/11/2015.
 */
require('./menu/Menu');
require('./dummy_view/DummyView');


var views = angular.module('Views', ['Menu', 'DummyView']);

module.exports = views;