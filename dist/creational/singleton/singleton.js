"use strict";
class Single {
    constructor() {
        console.log('I am only one');
    }
}
class Singleton {
    constructor() {
        if (!Singleton.hasInstance) {
            this.single = new Single();
            Singleton.hasInstance = true;
        }
    }
    getSingle() {
        return this.single;
    }
}
Singleton.hasInstance = false;
let s1 = new Singleton().getSingle();
let s2 = new Singleton().getSingle();
