# Enums
An Enum is a special "class" that represents a group of constants (*Unchangeable variables*)
Each value in the enum has a value indexed from 0.

```ts
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'. 
```

## Numeric Enums - Initialized
You can define the numeric value of a value inside an enum, each value afterwards will count from this number
```ts
enum CardinalDirections {
  North = 1,
  East, //2
  South, //3
  West //4
}
```
You can initialize each enum value to prevent auto incrementing of values.
```ts
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
```
You can also initialize enums with strings, this is more common practice than numbers
```ts
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
```