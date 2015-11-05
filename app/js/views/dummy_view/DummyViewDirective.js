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
