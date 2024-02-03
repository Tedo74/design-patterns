"use strict";
class Singleton2 {
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
    /**
     * Returns the instance of Singleton2 class.
     *
     * @return {Singleton2} The instance of Singleton2 class.
     */
    static getInstance() {
        if (!Singleton2.instance) {
            Singleton2.instance = new Singleton2();
        }
        return Singleton2.instance;
    }
}
// Id is always 1;
console.log(Singleton2.getInstance());
console.log(Singleton2.getInstance());
console.log(Singleton2.getInstance());
// The same instance.
const s1 = Singleton2.getInstance();
const s2 = Singleton2.getInstance();
console.log(s1 === s2);
console.log(s1.id);
console.log(s2.id);
console.log(s1.id === s2.id);
//# sourceMappingURL=singleton2.js.map