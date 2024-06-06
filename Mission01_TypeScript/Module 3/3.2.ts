{
  //OOP - inheritence
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(noOfHours: number) {
      console.log(`${this.name} sleeps for ${noOfHours} hours`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    getSleep(noOfHours: number) {
      console.log(`${this.name} sleeps for ${noOfHours} hours`);
    }
  }
  const student1 = new Student("Khan", 20, "Dhaka");
  student1.getSleep(8);

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(noOfClass: number) {
      console.log(
        `${this.name} is a ${this.designation} and take class for ${noOfClass} hours`
      );
    }
  }

  const teacher1 = new Teacher("Mr. Teacher", 30, "Dhaka", "Teacher");
  teacher1.getSleep(6);
  teacher1.takeClass(2);
}
