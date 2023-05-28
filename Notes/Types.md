# Types
### string
### Boolean
### Number
### Null
### Undefined
### Void
### Object
### Array
### Tuple
### Any
### Unkown
### Never

## Declaring a variables
```
let/const variableName: type = value
```
In typescript, due to it's nature, when using the dot notation to apply methods to variables, only methods that work with a select data type will appear as a suggestion, very cool!
It is very safe to declare a variable as ``` let/const variableName = value ``` due to how typescript uses inference. There are cases in which you should declare a variable with the type however, commonly if a variable is declared with no value.

## Implcit Types
Assumed data types commonly seen in javascript. 
```ts
let firstName = "Dylan";
```

## Explicit Types
Clearly defined data types e.g  
```ts
let firstName: string = "Dylan";
```

## Infered Types
This is when typescript is left to guess the type of a variable. This is a result of implicit data types.

## Number
There is no explicit way to define a float or int in typescript, number is all we need to define such a variable.  
(*Supposedly this is a common interview question*)

## "Any" Type
You can use the "any" type to disable type checking. It is reccommended not to use this.
``` ts
let v: any = true; 
```

## "Unknown" Type
"Unkown" works much the same as "any" but much safer. Typescript will prevent this type to be used.  
```ts 
let v: any = true; 
```

## Casting Types
Casting is when you assign a type to an "unkown" or "any" variable.  

## "Never" Type
Throws an error whenever it is defined. This is a rarely used type.

## Undefined and null types
The same as javascript typing.  
*(These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.)*
