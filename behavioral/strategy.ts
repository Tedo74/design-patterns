/* Define a family of algorithms,
put each of them into a separate class,
and make their objects interchangeable.*/

class Warrior {
  constructor(private _weapon: IWeapon) {}
  set weapon(weapon: IWeapon) {
    this._weapon = weapon;
  }

  attack() {
    this._weapon.attack();
  }
}

interface IWeapon {
  attack(): void;
}

class Bow implements IWeapon {
  attack(): void {
    console.log('attack with Bow');
  }
}

class Sword implements IWeapon {
  attack(): void {
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
