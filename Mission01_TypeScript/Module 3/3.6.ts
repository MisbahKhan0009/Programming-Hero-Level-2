{
  //getter Setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    get Balance() {
      return this._balance;
    }
  }

  const poorAccount = new BankAccount(1, "Poor Account", 100);
  console.log(poorAccount.id);
  console.log(poorAccount.name);
  poorAccount.deposit = 100;
  console.log(poorAccount.Balance);
}
