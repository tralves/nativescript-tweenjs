var Tweenjs = require("nativescript-tweenjs").Tweenjs;
var tweenjs = new Tweenjs();

describe("greet function", function() {
    it("exists", function() {
        expect(tweenjs.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(tweenjs.greet()).toEqual("Hello, NS");
    });
});