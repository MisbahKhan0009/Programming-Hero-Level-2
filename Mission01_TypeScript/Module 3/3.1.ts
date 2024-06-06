{
  //OOP - class
  // class Declaration

  class Animal {
    constructor(
      public name: string,
      public spices: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(
        `${this.name} is a ${this.spices} and it makes ${this.sound} sound`
      );
    }
  }

  const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian", "Cat", "Meow Meow");

  cat.makeSound();
  dog.makeSound();

  //
}
