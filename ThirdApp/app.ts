//AVOID USING ANY AS IT MAKES INFERENCES DIFFICULT

//Declared with data type due to no initial value
let hero: string;

//Declared with return type of string so that only a string is returned.
function getHero(): string {
    return "Batman";
}
hero = getHero();

//Function are very important to define data types
//declared with argument type as number
function addTwo(num: number){
    return num + 2;
}
console.log(addTwo(5));

function getUpper(val: string){
    return val.toUpperCase();
}
getUpper("Hello");

function signUpUser(name: string, email: string, password: string, isPaid: boolean){
}
signUpUser("Bailey", "12345.com", "123456", false);

//If a parameter is given a default value in the function declaration, it is optional when calling the function
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("Bailey", "12345.com");

/*function getValue(myVal: number): boolean{
    if (myVal > 5) {
        return true;
    }
    return "200"
}*/

//arrow functions with a return type must be given a return value
const getHello = (s: string): string => {
    return "";
}

//Typescript is aware of the context of the array and can infer the type of the array
const heroes = ["Batman", "Superman", "Flash", 1];
heroes.map(hero => {
    return `give it up for ${hero}!`
})

//void means the function is intended to not return anything
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

//never means the function will never return anything, used when the function thows an exception or terminates the program
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}