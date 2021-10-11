"use strict";
/* Define a family of algorithms,
put each of them into a separate class,
and make their objects interchangeable.*/
class Warrior {
    constructor(_weapon) {
        this._weapon = _weapon;
    }
    set weapon(weapon) {
        this._weapon = weapon;
    }
    attack() {
        this._weapon.attack();
    }
}
class Bow {
    attack() {
        console.log('attack with Bow');
    }
}
class Sword {
    attack() {
        console.log('attack with Sword');
    }
}
const sword = new Sword();
const bow = new Bow();
const samurai = new Warrior(sword);
samurai.attack();
samurai.weapon = bow;
samurai.attack();
samurai.weapon = sword;
samurai.attack();
