{
  //spread operator
  const bros1: string[] = ["an", "bn", "cn", "dn", "en"];
  const bros2: string[] = ["f", "g", "h", "i", "j"];

  bros1.push(...bros1);

  const mentor1 = {
    c: "john",
    javascript: "smith",
    typescript: "jones",
  };

  const mentor2 = {
    d: "wick",
    java: "harry",
    pyhton: "pottr",
  };

  const mentorList = {
    ...mentor1,
    ...mentor2,
  };

  //rest operator

  const greatFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };

  greatFriends("Abul", "John");
  
}
