///<reference path="gameObject.ts"/>


class Driver extends GameObject{
            
    constructor() {
        super("driver");
        this.div.style.transform ="translate(200px,100px)";

        let m:Message = new Message();
        m.logMessage("Created a driver!");
    }
}