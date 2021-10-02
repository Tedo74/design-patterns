class Single {
  constructor() {
    console.log('I am only one');
  }
}

class Singleton {
  static hasInstance = false;
  single: Single | undefined;
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

let s1 = new Singleton().getSingle();
let s2 = new Singleton().getSingle();
