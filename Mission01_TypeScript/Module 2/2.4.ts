{
  //Generic Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Misbah",
    computer: {
      brand: "Apple",
      model: "Macbook Air 13 inch",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "Amoled",
    },
  };

  const richDeveloper: Developer<
    {
      brand: string;
      model: string;
      heartTrack: boolean;
      sleepTrack: boolean;
    },
    {
      brand: string;
      model: string;
    }
  > = {
    name: "Khan",
    computer: {
      brand: "Apple",
      model: "Macbook Air M1",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple watch 6",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Honda",
      model: "RX50",
    },
  };
  //
}
