//defines a new type
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return this.name;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink ihas ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`Summary:${item.summary}`);
};

printSummary(oldCivic);
printSummary(drink);
//make generic interfaces
