{
  //Function with Generics
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  type User = { id: number; name: string };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: "abul" });

  //

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
//   type User = { id: number; name: string };

  const res2 = createArrayWithTuple("Bangladesh", 222);
  const resGeneric2 = createArrayWithTuple<string, { name: string }>(
    "Bangladesh",
    {
      name: "Asia",
    }
  );
  const addCoureToStudent = <T>(student: T) => {
    const course = "Next level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCoureToStudent({
    name: "abul",
    email: "abul@gmail.com",
    devType: "Next Level Web Dev",
  });
  const studenty = addCoureToStudent({
    name: "dabul",
    email: "dabul@gmail.com",
    hasWatch: "Apple Watch",
  });
}
