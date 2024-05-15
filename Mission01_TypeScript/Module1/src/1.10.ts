{
  // union types
  //   type frontendDeveloper = "noob" | "pro";
  //   type fullstack = "backendDeveloper" | "expertDeveloper";

  //   type Developer = frontendDeveloper | fullstack;

  //   const newDeveloer: frontendDeveloper = "noob";

  //   type User = {
  //     name: string;
  //     email: string;
  //     gender: "male" | "female";
  //   };

  //   const user1: User = {
  //     name: "Abul",
  //     email: "abul@joma.com",
  //     gender: "male",
  //   };

  type frontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type backendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type fullstackDeveloper = frontendDeveloper & backendDeveloper;

  const fullstackDeveloper: fullstackDeveloper = {
    skills: ["html", "javascript"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
