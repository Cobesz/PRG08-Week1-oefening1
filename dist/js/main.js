var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(tag) {
        this.div = document.createElement(tag);
        document.body.appendChild(this.div);
    }
    return GameObject;
}());
var Driver = (function (_super) {
    __extends(Driver, _super);
    function Driver() {
        var _this = _super.call(this, "driver") || this;
        _this.div.style.transform = "translate(200px,100px)";
        var m = new Message();
        m.logMessage("Created a driver!");
        return _this;
    }
    return Driver;
}(GameObject));
var Kart = (function (_super) {
    __extends(Kart, _super);
    function Kart() {
        var _this = _super.call(this, "kart") || this;
        _this.speed = 3;
        _this.x = 0;
        _this.y = 100;
        var m = new Message();
        m.logMessage("Created a kart!");
        return _this;
    }
    Kart.prototype.move = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px,100px)";
    };
    return Kart;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.kart = new Kart();
        this.driver = new Driver();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.kart.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Message = (function () {
    function Message() {
    }
    Message.prototype.logMessage = function (str) {
        console.log(str);
    };
    return Message;
}());
//# sourceMappingURL=main.js.map