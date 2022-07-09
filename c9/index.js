// The code starts by requiring the express module.
const express = require("express");

//  Next, it creates a handler for adding students to the database.
//  The handlers are defined in a file called "handlers".
//  This is an example of how you can use require() to load multiple files at once.
const handlers = require("./handlers");

//  Next, we create an app object and pass it into the use method on Express.
const app = express();

app.use(express.json());

//  We then set up our routes using post(), get(), put(), delete().
app.post("/studenti", handlers.addStudent);
app.get("/studenti", handlers.getAllStudents);
app.get("/studenti/:id", handlers.getOneStudent);
app.put("/studenti/:id", handlers.updateStudent);
app.delete("/studenti/:id", handlers.deleteStudent);

//  Finally, we start listening on port 8080 with listen().
app.listen(8080, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started on port 8080");
});

//  The code will create a web server that listens on port 8080.
//  The code above will call the handlers.addStudent function when the user visits the URL /studenti, which will add a new student to our database.
//  The handlers.getAllStudents function will return all of the students in our database and the handlers.getOneStudent function will return one student at a time from our database based on their ID number.
//  The handlers.updateStudent function is used to update existing students in our database with new information, while the handlers.deleteStudent function is used to delete existing students from our database
