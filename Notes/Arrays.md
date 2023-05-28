# Arrays
Typescript has special definition methods for arrays
```ts 
    const names: string[] = [];
    names.push("Dylan"); // no error
    // names.push(3);   
    // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```
## Readonly
Readonly arrays can not be changed
```ts
const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works? 
```
## Infering array types
Typescript can identify the types of values in an array and infer them onto a variable of the the same typing as the infered array.
```ts
let head: number = numbers[0]; // no error 
```

## Tuples
A typed array with predefined length and type for each index
```ts
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
```
You must assign the values in the order that the array was initialised in. e.g
```ts 
ourTuple = [false, 5, 'Coding God was here']; //throws error
```
Tuples are commonly made readonly because indexes past the initial tuple have no type safety and you can push unsafe variables into the array
```ts
const ourReadonlyTuple: readonly [number, boolean, string]
ourReadOnlyTuple = [5, true, 'The Real Coding God'];
```
### Named Tuples
Named tuples allow for context for each value
```ts
const graph: [x: number, y: number] = [55.2, 41.3];
```

## Destructuring Arrays
Destructuring arrays is a method of assigning array items to a variable aslong as the types are correct.
```ts
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
```
This is especially useful when a function returns an array like so.
```ts
function calculate(a: number, b: number): [number, number, number, number] { 
  //[number, number, number, number] defines the return type
  const add: number = a + b;
  const subtract: number = a - b;
  const multiply: number = a * b;
  const divide: number = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

```
