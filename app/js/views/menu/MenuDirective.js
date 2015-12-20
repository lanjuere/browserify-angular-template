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
