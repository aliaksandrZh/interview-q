const object = {
  name: "John Cohnor",
  printName() {
    console.log(this.name);
  },
};

object.printName(); // what we will see here

const printName = object.printName;

printName(); // what we will se in console here
