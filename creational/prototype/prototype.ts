interface IUserDetails {
    name: string;
    age: number;
    email: string;
}

interface IPrototype {
    clone(): Prototype;
    getUserDetails(): IUserDetails;
}

class Prototype implements IPrototype {
    private readonly userDetails: IUserDetails;

    constructor(userDetails: IUserDetails) {
        this.userDetails = userDetails;
    }

    clone(): Prototype {
        const clonedUserDetails: IUserDetails = {
            name: this.userDetails.name,
            age: this.userDetails.age,
            email: this.userDetails.email
        };
        return new Prototype(clonedUserDetails);
    }

    getUserDetails(): IUserDetails {
        return this.userDetails;
    }
}

const user1 = new Prototype({name: "John", age:22, email:"john@mail.com"});
const user2 = user1.clone();
// Clone - should return false.
console.log(user1 === user2);

console.log(user1.getUserDetails(), user2.getUserDetails());
user2.getUserDetails().name = "Json";
console.log(user1.getUserDetails(), user2.getUserDetails());
