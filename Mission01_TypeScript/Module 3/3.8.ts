{
  //Polymorphosim

  class Person {
    getSleep() {
      console.log(`I sleep for 7 hours a day`);
    }
  }
  class Student extends Person {
    getSleep() {
      console.log(`I sleep for 6 hours a day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I sleep for 5 hours a day`);
    }
  }
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const student1 = new Student();
  const developer1 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(student1);
  getSleepingHours(developer1);

  class shape {
    area(): number {
      return 0;
    }
  }

  class circle extends shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class rectangle extends shape {
    length: number;
    breadth: number;
    constructor(length: number, breadth: number) {
      super();
      this.length = length;
      this.breadth = breadth;
    }
    area(): number {
      return this.length * this.breadth;
    }
  }

  const getShapeArea = (param: shape) => {
    console.log(param.area());
  };

  const shape1 = new shape();
  const circle1 = new circle(5);
  const rectangle1 = new rectangle(5, 10);

  getShapeArea(shape1);
  getShapeArea(circle1);
  getShapeArea(rectangle1);
}
