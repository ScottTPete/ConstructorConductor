//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.



// function reverseString(str) {
//   return str.split('').reverse().join('');
//
// }
//
//
// reverseString("Hello");

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

var wor = "hi"

console.log(wor.reverse());
