{
  //generic type
  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
  const mentors: GenericArray<string> = ["x", "y", "z"];
  const boolArr: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Misbah",
      age: 100,
    },
    {
      name: "khan",
      age: 110,
    },
  ];

  const add = (x: number, y: number) => x + y;

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const Manush: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];
  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Misbah", email: "misbah@gmail.com" },
  ];
}
