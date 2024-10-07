interface Cat {
    update(starState: string): void;
}

interface MouseStar{
    addFan(cat: Cat): void;
    removeFan(cat: Cat): void;
    notifyFans(): void;
    getState(): string;
    setState(state: string): void;
}

class MouseSuperStar implements MouseStar {
    private fans = new Set<Cat>();
    private state = '';

    addFan(cat: Cat): void {
        this.fans.add(cat);
    }

    removeFan(cat: Cat): void {
       this.fans.delete(cat);
    }

    notifyFans(): void {
        this.fans.forEach((fan: Cat) => {
            fan.update(this.state);
        });
    }

    public getState(): string {
        return this.state;
    }

    setState(state: string): void {
        this.state = state;
        this.notifyFans();
    }
}

class Fan implements Cat {
    constructor(private fanName: string){}

    update(starState: string): void {
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

