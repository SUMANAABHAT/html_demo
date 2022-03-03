  //This is my first JavaScript Code!
  console.log('Hello World!');
  let name ='Sumana';
  console.log(name);
  //cannot be a reserved keyword 
  //should be meaningful
  //cannot start with a number (1name)
  //cannot contain a space or hyphen(-)
  //Are Case sensitive
  let firstName = 'Sumana';//string literal
  let age = 40;//number literal
  let isApproved = false;//boolean literal
  let firstName = undefined;
  let selectedColor = null;
  let selectedColor = 'red';


  let person = {
    name: 'sumana',
    age: 40
  };
  // Dot Notation
  person.name = 'John';

  // bracket Notation;
  person['name'] = 'Mary';

  console.log(person.name);

  let selectedColors = ['red','blue'];
  selectedColors[2] = 'green';
  selectedColors[3] = 1;
  console.log(selectedColors.length);
  console.log(selectedColors[0]);

// Performing a task

  function greet(){
    console.log('Hello World');
  }
  greet();

  function greet2(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
  }
    greet2('John', 'Smith');
  greet2('Mary');

  // Calculating a value
  function square(number) {
    return number * number;
  }
  let number = square(2);
  console.log(number);

  function square(number) {
    return number * number;
  }
  console.log(square(2));
  // 1 = 00000001
  // 2 = 00000010
  // R = 00000011
  //result will be 3
  // result will be R = 00000000

  console.log(1 | 2); //bitwise or
  console.log(1  & 2); //bitwise AND


  //Read, Write , Execute
  //00000100
  //00000110
  //00000111


 const readPermission = 4;
 const writePermission = 2;
 const executePermission = 1;
 let myPermission = 0;
 myPermission = myPermission | readPermission | writePermission;
 console.log(myPermission);

 let message =
 (myPermission & readPermission) ? 'yes' : 'no';
 console.log(message);

 let age = 18;
 let allowRegistration = age > 18 ? true : false;

 for (let j=1; ; j += 2) {

 }


  


