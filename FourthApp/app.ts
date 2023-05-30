const User = {
    name: "Bailey",
    email: "fivebailey2@gmail.com",
    isPaid: true
}

// using objects as a parameter
function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {
    // Rest of the function implementation
}

// No error because the passed param is a pre existing object, 
// would throw error if it was a new object created in the function e.g createUser({name: "Bailey", isPaid: true, email: "fivebailey2@gmail.com"})
// This matters because email is not a parameter of the function
createUser(User);

// returning objects from functions
function createCourse(): {name: string, price: number}{
    return {name: "Bailey", price: 100};
};

export{};