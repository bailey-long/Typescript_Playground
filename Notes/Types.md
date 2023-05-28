## Implcit Types
Assumed data types commonly seen in javascript. Typescript will not allow Implicit types.  
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

## "Any" Type
You can use the "any" type to disable type checking
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