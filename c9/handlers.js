// The code starts by requiring the utility module.
const utility = require("./utility");

// The DATA_SOURCE variable is set to ./data.txt, which will be read in as a file using utility.fileRead().
const DATA_SOURCE = "./data.txt";

const addStudent = async (req, res) => {
  try {
    // ја вчитуваме содржината на фајлот data.txt како стринг
    let dataRaw = await utility.fileRead(DATA_SOURCE);
    // проверуваме да не е празен фајлот

    let data = null;

    // The dataRaw variable is then checked for being null or not, and if it's not null, then JSON parsing is done on the raw data with JSON.parse() and an empty array of students is returned otherwise.
    // претпоставуваме дека ако има нешто во фајлот, тоа е валиден JSON
    data = dataRaw.length > 0 ? JSON.parse(dataRaw) : [];
    // if(dataRaw.length > 0) {
    //     data = JSON.parse(dataRaw);
    // } else {
    //     data = [];
    // }
    // го додаваме новиот запис како нов член на низата
    data.push(req.body);

    // ја запишуваме низата во фајлот
    await utility.fileWrite(DATA_SOURCE, JSON.stringify(data));
    // враќаме некаков output кон клиентот (postman)
    res.send("All is good");
  } catch (err) {
    res.send(err);
  }
};

const getAllStudents = async (req, res) => {
  try {
    let dataRaw = await utility.fileRead(DATA_SOURCE);
    let data = JSON.parse(dataRaw);
    res.send(data);
  } catch {
    res.send(err);
  }
};

// The code is used to add a student to the database.
const getOneStudent = async (req, res) => {
  try {
    let dataRaw = await utility.fileRead(DATA_SOURCE);
    let data = JSON.parse(dataRaw);

    // The code starts by checking if there is anything in the data array with an id of req.params.id .
    if (data[req.params.id]) {
      return res.send(data[req.params.id]);
      //  If so, then send that value back to the client as well as any other values found with that same key in the data array (i.e., "Error, nothing found").
    }
    res.send("Error, nothing found");
  } catch (err) {
    res.send(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    let dataRaw = await utility.fileRead(DATA_SOURCE);
    let data = JSON.parse(dataRaw);

    // The code starts by checking if the student ID is in the data array.
    // If it is, then the code will write out that student's information to a file and send back "ok".
    // Otherwise, it sends back "no student found" and exits.
    // The code will write the data to a file if it exists, otherwise it will send back an error.
    if (data[req.params.id]) {
      data[req.params.id] = req.body;
      await utility.fileWrite(DATA_SOURCE, JSON.stringify(data));
      res.send("ok");
    } else {
      res.send("no student found");
    }
  } catch (err) {
    res.send(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    let dataRaw = await utility.fileRead(DATA_SOURCE);
    let data = JSON.parse(dataRaw);

    // The code starts by checking if the data exists.
    // If it does, then it will write the file to a new location and send back "ok".
    // Otherwise, it sends back an error message.
    if (data[req.params.id]) {
      await utility.fileWrite(
        DATA_SOURCE,
        JSON.stringify(data.filter((student) => student != data[req.params.id]))
      );
      res.send("ok");
    } else res.send("not found");
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  getOneStudent,
  updateStudent,
  deleteStudent,
};

// The function takes in two parameters, req and res.
// req: This parameter is passed into the function as an HTTP request object.
// res: This parameter is passed into the function as an HTTP response object.
// The code starts by importing the utility module.
// It then creates a function called getAllStudents that takes in two parameters: req and res.
// The first parameter is an HTTP request object, which contains information about the request such as headers, URL, etc., while the second parameter is an HTTP response object that will be sent back to the client.
// The code starts by creating a variable called dataRaw and assigning it to await utility.fileRead(DATA_SOURCE).
// This line of code reads all of the files from DATA_SOURCE into memory before parsing them with JSON.parse().
// Then it sends this data back to the client with res.send() method on line 8 (line 9 if you count line 7).
// Next, we have another function called getOneStudent that takes in one parameter: req and returns an HTTP response object containing only one student's record when given a specific ID passed in through req's params property on line 6 (line 7 if you count line 5).
// The code is a function that takes in an HTTP request and sends back the data from the file.
// The first part of the code is a function called getAllStudents which takes in an HTTP request and sends back all of the data from the file.
// The second part of the code is a function called getOneStudent which takes in an HTTP request and sends back only one student’s data from the file.
