@classDecorator
class Boat {
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `this boat color is ${this.color}`;
  }

  @logError("Ooops")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    }
    console.log("nothing");
  }
}
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

function logError(err: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(err);
      }
    };
  };
}
