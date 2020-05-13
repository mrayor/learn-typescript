const carMakers = ["ford", "toyota", "chevy"];
const date = [new Date(), new Date()];
const carsByMake = [["f150"], ["corrola"], ["camaro"]]; //:string[][]

//helps with inference when extracting values

const d = date[1];

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types

const importantDates: (Date | string)[] = [new Date(), "2010-10-10"];

importantDates.push(new Date());
