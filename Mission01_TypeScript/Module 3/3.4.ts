{
  //instanceof guard

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making Sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("Ghew Ghew");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log("Mew Mew");
    }
  }

  // smat way to handle ==> use function

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat  => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };
  const dog = new Dog("German Shepard", "Dog");
  const cat = new Cat("Persian", "Cat");
}
