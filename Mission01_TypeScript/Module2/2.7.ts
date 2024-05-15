{
  //generic constrains with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const user = {
    name: "Mr. Misbah",
    age: 22,
    address: "dhk",
  };

  const car = {
    module: "Toyota",
    year: 2000,
  };
//   const result1 = getPropertyValue(car);
  //
}
