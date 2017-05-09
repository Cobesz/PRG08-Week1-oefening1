///<reference path="gameObject.ts"/>


class Kart extends GameObject{

    private speed:number;
    private x: number;
    private y: number;
            
    constructor() {
        super("kart");
        this.speed = 3;

        this.x = 0;
        this.y = 100;

        let m:Message = new Message();
        m.logMessage("Created a kart!");
    }

    public move() {
        this.x += this.speed;
        this.div.style.transform ="translate("+this.x+"px,100px)";
    }
}