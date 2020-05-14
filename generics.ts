class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

//generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

//type inference
const arr = new ArrayOfAnything(["a", "b", "c"]);

//type annotation
const arr2 = new ArrayOfAnything<string>(["a", "b", "c"]);

//Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}

///GENERICS
function printAnyting<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}

//annotations
printAnyting<string>(["a", "b", "c"]);

//inference
printAnyting(["a", "b", "c"]);
