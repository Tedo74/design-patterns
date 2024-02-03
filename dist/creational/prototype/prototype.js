"use strict";
class Prototype {
    constructor(userDetails) {
        this.userDetails = userDetails;
    }
    clone() {
        const clonedUserDetails = {
            name: this.userDetails.name,
            age: this.userDetails.age,
            email: this.userDetails.email
        };
        return new Prototype(clonedUserDetails);
    }
    getUserDetails() {
        return this.userDetails;
    }
}
const user1 = new Prototype({ name: "John", age: 22, email: "john@mail.com" });
const user2 = user1.clone();
// Clone - should return false.
console.log(user1 === user2);
console.log(user1.getUserDetails(), user2.getUserDetails());
user2.getUserDetails().name = "Json";
console.log(user1.getUserDetails(), user2.getUserDetails());
//# sourceMappingURL=prototype.js.map