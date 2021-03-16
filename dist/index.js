"use strict";
var Test = /** @class */ (function () {
  function Test() {}
  Test.prototype.helloWorld = function () {
    console.log("hi!!");
  };
  return Test;
})();
new Test().helloWorld();
