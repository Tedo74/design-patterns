"use strict";
class MouseSuperStar {
    constructor() {
        this.fans = new Set();
        this.state = '';
    }
    addFan(cat) {
        this.fans.add(cat);
    }
    removeFan(cat) {
        this.fans.delete(cat);
    }
    notifyFans() {
        this.fans.forEach((fan) => {
            fan.update(this.state);
        });
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notifyFans();
    }
}
class Fan {
    constructor(fanName) {
        this.fanName = fanName;
    }
    update(starState) {
        console.log(`${this.fanName} received a message that his star is now ${starState}.`);
    }
}
//
const mouse = new MouseSuperStar();
const gosho = new Fan('Gosho');
const pesho = new Fan('Pesho');
mouse.addFan(gosho);
mouse.addFan(pesho);
mouse.setState('sleeping');
mouse.setState('traveling');
//# sourceMappingURL=observer2.js.map