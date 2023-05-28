# Objects
Typescript works slightly differently with objects compared to javascript

## Defining Objects
Typescript has specific syntax for defining objects
```ts
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
```

## Infering object types
Typescript can infer the components of an object, 
```ts
const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
```

## Optional Properties
An optional property is a property that is not defined in object definition, this is done with a "?"
```ts
const car: { type: string, mileage?: number } = {
  type: "Toyota"
};
car.mileage = 2000;
```

## Index Signatures
Used for an object without a defined set of properties
```ts
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
```