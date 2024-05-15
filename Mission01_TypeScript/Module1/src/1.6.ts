{
  //Normal function
  //Arrow function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  console.log(add(2, 4));

  const addArrow = (num: number, num2: number): number => num + num2;

  const poorUser = {
    name: "Misbah",
    balance: 0,
    addBalance(balance: number): number {
      this.balance = this.balance + balance;
      return this.balance;
    },
  };

  const arr: number[] = [1, 4, 10];
  const newArray: number[] = arr.map((elem: number): number => elem * elem);
}
