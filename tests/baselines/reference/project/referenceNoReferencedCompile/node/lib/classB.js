/// <reference path="classA.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var test;
(function (test) {
    var ClassB = (function (_super) {
        __extends(ClassB, _super);
        function ClassB() {
            _super.apply(this, arguments);
        }
        return ClassB;
    })(test.ClassA);
    test.ClassB = ClassB;
})(test || (test = {}));
