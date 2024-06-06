{
  //destructuring

  //object destructuring

  const user = {
    id: 123,
    name: {
      firstName: "John",
      middleName: "harry",
      lastName: "wick",
    },

    contactNo: "0121212121",
    address: "Uganda",
  };

  const {
    contactNo,
    name: { middleName: midName },
  } = user;

  //array destructuring

  const myFriends = ["chandler", "joey", "ross", "rachel"];
  const [a, bestfiend, c, d] = myFriends;
}
