const fs = require("fs");

// Read a file
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(data);
});

// Write a file
fs.writeFile(
  ".newFile.txt",
  "Jimmy, Frank, Pulumbo, Anna,Arnold, Scott",
  (err) => {
    if (err) {
      console.log("There seems to be an error", err);
    }
  }
);

// Rename a file
fs.rename("file.txt", "hello.txt", (err) => {
  if (err) {
    console.log("There seems to be an error", err);
  }
});

// fs.rename("hello.txt", "file.txt", (err) => {
//   if (err) {
//     console.log("There seems to be an error", err);
//   }
// });

// Copy a file

(async () => {
  fs.copyFile("colors.txt", "copiedFile.txt", (err) => {
    if (err) {
      console.log("There seems to be an error", err);
    }
    console.log("color.txt was copied to copiedFile.txt");
  });
})();

// Delete / Remove a file
const path = "./file.txt";

(async () => {
  try {
    fs.unlinkSync(path);
  } catch (err) {
    console.error(err);
  }
})();
