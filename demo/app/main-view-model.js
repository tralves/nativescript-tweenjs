"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var nativescript_tweenjs_1 = require("nativescript-tweenjs");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.message = '0';
        _this.bunjee = 0;
        return _this;
    }
    HelloWorldModel.prototype.onTap = function (args) {
        var _this = this;
        var tween = new nativescript_tweenjs_1.TWEEN.Tween({ x: 50, y: 0 })
            .to({ x: 400 }, 5000)
            .easing(nativescript_tweenjs_1.TWEEN.Easing.Elastic.InOut)
            .onUpdate(function (object) {
            _this.set('btnWidth', object.x);
        })
            .start();
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQXlFO0FBQ3pFLDZEQUE2QztBQUU3QztJQUFxQyxtQ0FBVTtJQUk3QztRQUFBLFlBQ0UsaUJBQU8sU0FJUjtRQUZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztJQUNsQixDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLElBQWU7UUFBckIsaUJBUUM7UUFQQyxJQUFJLEtBQUssR0FBRyxJQUFJLDRCQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDekMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQzthQUNwQixNQUFNLENBQUMsNEJBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNsQyxRQUFRLENBQUMsVUFBQSxNQUFNO1lBQ2QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUFxQyx1QkFBVSxHQW9COUM7QUFwQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBUV0VFTiB9IGZyb20gJ25hdGl2ZXNjcmlwdC10d2VlbmpzJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgYnVuamVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWVzc2FnZSA9ICcwJztcbiAgICB0aGlzLmJ1bmplZSA9IDA7XG4gIH1cblxuICBvblRhcChhcmdzOiBFdmVudERhdGEpIHtcbiAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oeyB4OiA1MCwgeTogMCB9KVxuICAgICAgLnRvKHsgeDogNDAwIH0sIDUwMDApXG4gICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5FbGFzdGljLkluT3V0KVxuICAgICAgLm9uVXBkYXRlKG9iamVjdCA9PiB7XG4gICAgICAgIHRoaXMuc2V0KCdidG5XaWR0aCcsIG9iamVjdC54KTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgfVxufVxuIl19