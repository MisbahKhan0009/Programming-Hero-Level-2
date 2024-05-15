{
  //Type alias

  type Student = {
    name: string;
    age: number;
    address: string;
    gender: string;
    contactNo?: string;
  };

  const student1: Student = {
    name: "Abul",
    age: 20,
    address: "Uganda",
    gender: "male",
    contactNo: "0121212121",
  };

  const student2: Student = {
    name: "Dabul",
    age: 21,
    address: "BD",
    gender: "male",
  };

  type UserName = string;
  type isAdmin = boolean;

  const UserName = "Kabul";
  const isAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
