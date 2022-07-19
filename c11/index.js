// MongoDB library
const mongoose = require("mongoose");

// the connectionString

// after the mongoose.mongodb.net/ here we put the database name ?retryWrites
const connectionString =

const connect = () => {
  return new Promise((success, fail) => {
    mongoose.connect(connectionString, (err) => {
      if (err) return fail(err);
      console.log("Connected successfully to MongoDB");
      return success();
    });
  });
};

// requesting data from Database
// models are written with capital first letter
const Students = mongoose.model(
  "students", // model name
  {
    // files inside the collection
    name: String,
    lastname: String,
    rating: Number,
  },
  "students" //collection name
);

// reading smh from the students collection
connect(connectionString)
  .then((res) => {
    return Students.find({});
  })
  .then((res) => {
    console.log(res);
    let s = new Students({
      name: "Brian",
      lastname: "Cranston",
      rating: "8.4",
    });
    //! saves the new user from above
    // return s.save();
    console.log("Saved!");
  })
  .then((res) => {
    //! updating a id from our database
    return Students.updateOne(
      { _id: "62d6eedf7f563e399575fc46" },
      { lastname: "Peterson" }
    );
  })
  .then((res) => {
    console.log("User has been updated!", res);
    //! delete the following user
    return Students.deleteOne({ _id: "62d708c5b76c1ba935ea3364" });
  })

  //   selection of data
  .then((res) => {
    console.log("Deleted Record");
    //! find/filter the following user
    return Students.find({ name: "Aaron" }, { lastname: 1 });
  })

  .then((res) => {
    console.log("Filtered results", res);
    // show me who has grater than 9 rating, and display only the last names and the rating
    return Students.find({ rating: { $gte: 5 } }, { lastname: 1, rating: 1 })
      .limit(3)
      .sort({ rating: -1 });
  })

  .then((res) => {
    console.log("Filtered results 2", res);
  })
  .catch((err) => {
    console.log(err);
  });
