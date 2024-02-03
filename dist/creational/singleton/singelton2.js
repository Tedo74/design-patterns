"use strict";
class Singelton2 {
    /**
     * A private constructor cannot be instantiated with new keyword:
     * new Singleton2() - It's not possible.
     *
     * @private
     * @constructor
     */
    constructor() {
        this.id = 0;
        this.id += 1;
        console.log(this.id);
    }
    static getInstance() {
        if (!Singelton2.instance) {
            Singelton2.instance = new Singelton2();
        }
        return Singelton2.instance;
    }
}
// Id is always 1;
console.log(Singelton2.getInstance());
console.log(Singelton2.getInstance());
console.log(Singelton2.getInstance());
const s1 = Singelton2.getInstance();
const s2 = Singelton2.getInstance();
console.log(s1 === s2);
//# sourceMappingURL=singelton2.js.map