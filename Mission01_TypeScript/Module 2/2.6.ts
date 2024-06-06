{
  //constrains
  const addCoureToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCoureToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "abul",
    email: "abul@gmail.com",
    devType: "Next Level Web Dev",
  });
  const student2 = addCoureToStudent({
    id: 333,
    name: "dabul",
    email: "dabul@gmail.com",
    hasWatch: "Apple Watch",
  });
  const student3 = addCoureToStudent({
    id: 333,
    name: "dabul",
    email: "dabul@gmail.com",
    hasWatch: "Apple Watch",
  });
}
