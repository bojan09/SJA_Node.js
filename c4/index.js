// Importing the File System module package from NodeJs
const fs = require("fs");
const { resourceUsage } = require("process");
const { createBrotliCompress } = require("zlib");

// If we want to use it, checkout the docs on Node and see what available

// Writing within a file
// fileSystem.writeFile(file, data[, options], callback)

fs.writeFile("names.txt", "John,newName,Anna,Lucas", (error) => {
  if (error) {
    console.log("ERROR", error);
  }
});

// console.log(fileSystem);

// Writing a function for fileWrite
// This function needs to return a promise
const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, (error) => {
      if (error) {
        return fail(error);
      }
      return success();
    });
  });
};

// Writing fileWrite with then & catch -- grades
fileWrite("grades.txt", "4,5,3,2,1,4,4,3")
  .then(() => {
    console.log("SUCCESS!");
  })
  .catch((error) => {
    console.log(error);
  });

// Writing fileWrite with then & catch -- colors
fileWrite("colors.txt", "red,yellow,green")
  .then(() => {
    console.log("SUCCESS!");
  })
  .catch((error) => {
    console.log(error);
  });

// fileWrite();

// Writing a async function

const main = async () => {
  try {
    // Await says don't go to a new line until this function is finished
    await fileWrite("file1.txt", "FILE ONE!");
    await fileWrite("file2.txt", "FILE TwO!");
    await fileWrite("file3.txt", "FILE THREE!");
  } catch (error) {
    console.log(error);
  }
};

main();

// Exercise

const fileRead = (filename) => {
  // success and fail, can be also found as resolve & reject
  return new Promise((success, fail) => {
    // the fs.readFile takes the file, reads the file in UTF-8 format, and return error if unsuccesfull,and data if successfull
    fs.readFile(filename, "utf-8", (error, data) => {
      if (error) {
        return fail(error);
      }
      return success(data);
    });
  });
};

// Async function
(async () => {
  try {
    let colors = await fileRead("colors.txt");
    console.log("Colors", colors);
  } catch (error) {
    console.log(error);
  }
})();

// fileRead("names.txt").then((data) => {
//   console.log(data);
// });

// -
// -
// -

// Exercise #2
let phonebook = [
  { name: "Alan Watts", phone: 202440 },
  { name: "James Bond", phone: 202450 },
  { name: "Jhonny Bravo", phone: 202420 },
  { name: "Anna Heat", phone: 202410 },
  { name: "Jane Doe", phone: 202400 },
];

(async () => {
  try {
    // Creates a String from the Object above
    let phonebookData = JSON.stringify(phonebook);
    console.log(phonebookData);
    // Printing the file
    fileWrite("phonebook.txt", phonebookData);
    // Reading the file
    let dataString = await fileRead("phonebook.txt");
    // converting the Object to an Array
    let data = JSON.parse(dataString);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();

// Async function, која се извршува сама
// (async) () =>{

// })()
