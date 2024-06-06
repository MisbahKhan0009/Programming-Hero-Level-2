{
  //Interface
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll = User1 & { role: string };

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  type rollNumber = number;

  interface User2 {
    name: string;
    age: number;
  }

  const User1: UserWithRoll = {
    name: "abul",
    age: 100,
    role: "student",
  };

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;
}
