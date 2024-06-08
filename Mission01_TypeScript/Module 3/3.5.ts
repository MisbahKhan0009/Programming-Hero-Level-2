{
  //access modifier

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  const poorAccount = new BankAccount(1, "Poor Account", 100);
  console.log(poorAccount.id);
  console.log(poorAccount.name);
  // console.log(poorAccount.balance); // error
  poorAccount.addDeposit(100);
  poorAccount.getBalance();
}
