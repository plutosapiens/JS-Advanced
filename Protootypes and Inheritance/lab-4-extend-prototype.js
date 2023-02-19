function extendedPrototype(classToExtended){
    classToExtended.prototype.species = 'Human'
    classToExtended.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}`
    }
}

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    toString() {
      return this.name + " is " + this.age + " years old.";
    }
  }
  
  extendedPrototype(Person);
  
  const john = new Person("John", 30);
  console.log(john.toSpeciesString()); // Output: "I am a Human. John is 30 years old."
  