// The code starts by importing modules for reading files and writing files from Node's core library (fs).
const fs = require("fs");

// It creates two promises which are used to read or write files synchronously or asynchronously respectively.

// The first function is an asynchronous function that takes in a file as its argument, then returns a promise with success and fail methods.
// Here we read the file named data.txt
const fileRead = async (file) => {
  return new Promise((success, fail) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

// The second function is also asynchronous, but it takes in the name of the file to write to as its argument, then writes data into the given file using fs.writeFile().
// Here we write to the file named data.txt
const fileWrite = async (file, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(file, data, (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

// The code is a module that exports two functions: fileRead and fileWrite.
module.exports = {
  fileRead,
  fileWrite,
};

// The code is a small program that writes and reads files.
