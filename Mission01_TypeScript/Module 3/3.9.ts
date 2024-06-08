{
  //Abstruction ==> 1. interface 2. abstract

  //interface
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("Car engine started");
    }
    stopEngine(): void {
      console.log("Car engine stopped");
    }
    move(): void {
      console.log("Car is moving");
    }
    test(): void {
      console.log("Test method is called");
    }
  }

  //abstract class

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    abstract test(): void;
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log("Car engine started");
    }
    stopEngine(): void {
      console.log("Car engine stopped");
    }
    move(): void {
      console.log("Car is moving");
    }
    test(): void {
      console.log("Test method is called");
    }
  }

  const hondaCar = new Car1();
  hondaCar.startEngine();
  hondaCar.stopEngine();
  hondaCar.move();
  hondaCar.test();

  const toyotaCar = new Car2();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
  toyotaCar.test();
}
