abstract class GameObject{

    protected div : HTMLElement;

    constructor(tag : string) {
        this.div = document.createElement(tag);
        document.body.appendChild(this.div);

    }

}