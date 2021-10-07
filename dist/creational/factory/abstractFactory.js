"use strict";
class AsusDarkHero {
    constructor() {
        this.mbName = 'AsusDarkHero';
        this.platform = 'AMD';
    }
}
class MsiMeg {
    constructor() {
        this.mbName = 'MsiMeg';
        this.platform = 'Intel';
    }
}
class Ryzen {
    constructor() {
        this.cpuName = 'Ryzen';
        this.platform = 'AMD';
    }
}
class IntelI9 {
    constructor() {
        this.cpuName = 'I9';
        this.platform = 'Intel';
    }
}
// families of related objects
class AmdFactory {
    getCpu() {
        return new Ryzen();
    }
    getMotherboard() {
        return new AsusDarkHero();
    }
}
class IntelFactory {
    getCpu() {
        return new IntelI9();
    }
    getMotherboard() {
        return new MsiMeg();
    }
}
class MainFactory {
    static assemble(platform) {
        if (platform === 'AMD') {
            const amdFactory = new AmdFactory();
            const cpu = amdFactory.getCpu();
            const motherboard = amdFactory.getMotherboard();
            return { cpu, motherboard };
        }
        else if (platform === 'Intel') {
            const intelFactory = new IntelFactory();
            const cpu = intelFactory.getCpu();
            const motherboard = intelFactory.getMotherboard();
            return { cpu, motherboard };
        }
        else {
            return undefined;
        }
    }
}
console.log(MainFactory.assemble('AMD'));
console.log(MainFactory.assemble('Intel'));
