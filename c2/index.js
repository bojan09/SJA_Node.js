console.log("test"); // string
console.log(1234); // number
console.log(true); // boolean
console.log("test1", "test2"); // array
console.log({ a: "test1", b: "test2" }); // object

// Базични типови на податоци

const d = 40;
const e = "some kind of a string";
const f = false;

const student = {
  name: "Jimmy",
  lastname: "McGill",
};

// We can change the value in the object, using the dot notation and selecting what we want to change
student.name = "Benedict";
student.lastname = "Cucumber";

console.log(student);

// Trying it with a class, it won't work becouse in this case we will be changing the constant. We can only change the properties inside the object

student = {
  name: "Jimmy",
  lastname: "McGill",
};

console.log(student);

const testFn = (o) => {
  // object with the name defined
  o.name = "Stanko";
  console.log(o);
};

// Bellow we call for a emthy object
testFn({});

let student = { name: "James", grade: 8 };

let stu = student;

stu.grade = 7;
console.log(student);

// Solution from teacher

const tempConvert = (type, value) => {
  switch (type) {
    case "c2f":
      return (value * 9) / 5 + 32;
    case "f2c":
      return (value * 5) / 9 - 32;
    default:
      console.log("Cannot Convert");
      break;
  }
};

let celsius = 100;
let fahrenheit = tempConvert("f2c", celsius);
console.log("Convert result", fahrenheit);
