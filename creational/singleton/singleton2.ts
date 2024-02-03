class Singleton2 {
    private static instance: Singleton2;
    id = 0;

    /**
     * A private constructor cannot be instantiated with new keyword:
     * new Singleton2() - It's not possible.
     *
     * @private
     * @constructor
     */
    private constructor() {
        this.id += 1;
        console.log(this.id);
    }

    /**
     * Returns the instance of Singleton2 class.
     *
     * @return {Singleton2} The instance of Singleton2 class.
     */
    public static getInstance(): Singleton2 {
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