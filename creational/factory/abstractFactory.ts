interface IMotherboard {
  mbName: string;
  platform: string;
}

interface ICpu {
  cpuName: string;
  platform: string;
}

class AsusDarkHero implements IMotherboard {
  mbName: string;
  platform: string;
  constructor() {
    this.mbName = 'Asus Dark Hero';
    this.platform = 'AMD';
  }
}

class MsiMeg implements IMotherboard {
  mbName: string;
  platform: string;
  constructor() {
    this.mbName = 'Msi Meg';
    this.platform = 'Intel';
  }
}

class Ryzen implements ICpu {
  cpuName: string;
  platform: string;
  constructor() {
    this.cpuName = 'Ryzen';
    this.platform = 'AMD';
  }
}

class IntelI9 implements ICpu {
  cpuName: string;
  platform: string;
  constructor() {
    this.cpuName = 'I9';
    this.platform = 'Intel';
  }
}

interface IFactory {
  getCpu(): ICpu;
  getMotherboard(): IMotherboard;
}

// families of related objects
class AmdFactory implements IFactory {
  getCpu(): ICpu {
    return new Ryzen();
  }
  getMotherboard(): IMotherboard {
    return new AsusDarkHero();
  }
}

class IntelFactory implements IFactory {
  getCpu(): ICpu {
    return new IntelI9();
  }
  getMotherboard(): IMotherboard {
    return new MsiMeg();
  }
}

interface IComputer {
  cpu: ICpu;
  motherboard: IMotherboard;
}

class MainFactory {
  static assemble(platform: string): IComputer | null {
    if (platform === 'AMD') {
      const amdFactory = new AmdFactory();
      const cpu = amdFactory.getCpu();
      const motherboard = amdFactory.getMotherboard();
      return { cpu, motherboard };
    } else if (platform === 'Intel') {
      const intelFactory = new IntelFactory();
      const cpu = intelFactory.getCpu();
      const motherboard = intelFactory.getMotherboard();
      return { cpu, motherboard };
    } else {
      return null;
    }
  }
}

console.log(MainFactory.assemble('AMD'));
console.log(MainFactory.assemble('Intel'));
// console.log(MainFactory.assemble('Other'));
