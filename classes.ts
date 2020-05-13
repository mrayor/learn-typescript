class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
vehicle.drive();
vehicle.color;

console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("from the car");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");

car.startDrivingProcess();
