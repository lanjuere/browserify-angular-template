var Dummy = require('../../js/beans/Dummy');
describe("A suite", function () {
    it("dummy say hello !", function () {
        var dummy = new Dummy();
        expect(dummy.sayHello()).toBe("hello");
    });
});