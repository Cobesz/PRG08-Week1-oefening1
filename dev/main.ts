/// <reference path="kart.ts"/>
/// <reference path="driver.ts"/>

class Game {

    private kart : Kart;
    private driver: Driver;

    constructor() {
        this.kart   = new Kart();
        this.driver = new Driver();

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.kart.move();
        requestAnimationFrame(() => this.gameLoop());
    }
    
} 


// load
window.addEventListener("load", function() {
    new Game();
});
