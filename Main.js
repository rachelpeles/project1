var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Plant = /** @class */ (function () {
    function Plant(_Name, _plantNumber, _season) {
        this.name = _Name;
        this.plantNumber = _plantNumber;
        this.season = _season;
    }
    Plant.prototype.life_span = function (monse) {
        if (monse === void 0) { monse = 0; }
        console.log(this.name + " live " + monse + " years.");
    };
    return Plant;
}());
var Season;
(function (Season) {
    Season[Season["Fall"] = 0] = "Fall";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
})(Season || (Season = {}));
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree(name, plantNumber, season, _hasFruit) {
        var _this = _super.call(this, name, plantNumber, season) || this;
        _this.hasFruit = _hasFruit;
        return _this;
    }
    Tree.prototype.life_span = function (monse) {
        console.log("the tree...");
        _super.prototype.life_span.call(this, monse);
    };
    return Tree;
}(Plant));
var Flower = /** @class */ (function (_super) {
    __extends(Flower, _super);
    function Flower(name, plantNumber, season, _hasSmell, _color) {
        var _this = _super.call(this, name, plantNumber, season) || this;
        _this.hasSmell = _hasSmell;
        _this.color = _color;
        return _this;
    }
    return Flower;
}(Plant));
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Yellow"] = 3] = "Yellow";
    Colors[Colors["Pink"] = 4] = "Pink";
})(Colors || (Colors = {}));
var t1 = new Tree('brosh', 1, Season.Fall, false);
var t2 = new Tree('dekel', 2, Season.Summer, true);
var f3 = new Flower('vared', 3, Season.Spring, true, Colors.Pink);
var f4 = new Flower('shoshana', 4, Season.Fall, false, Colors.Red);
var f5 = new Flower('sigalit', 5, Season.Spring, true, Colors.Pink);
var plant = [t1, t2, f3, f4, f5];
// let list: number[] = [1, 2, 3];
plant.forEach(function (p) {
    p.life_span();
});
///בכיגעהטצחאןנטכמלויהצככ מירהאג