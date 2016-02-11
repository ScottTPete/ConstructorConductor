//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
  this.name = name;
  this.age = age;
//   this.sayName = function() {
//     console.log(this.name);
//   }
}


//Now create three instances of Person with data you make up

var bob = new Person("Bob", 67);
var batman = new Person("Batman", 35);
var ichiro = new Person("Ichiro", 39);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
  alert(this.name);
}

batman.sayName();
