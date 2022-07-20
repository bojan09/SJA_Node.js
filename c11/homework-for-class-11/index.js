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
    location: {
      city: String,
      state: String,
    },
  },
  "students" //collection name
);

connect(connectionString)
  .then((res) => {
    //! Топ 5 студенти според просек
    return Students.find(
      { rating: { $gte: 9 } },
      { name: 1, lastname: 1, rating: 1 }
    )
      .limit(5)
      .sort({ rating: -1 });
  })
  .then((res) => {
    console.log("Toп 5 студенти според просек", res);
  })

  //! Најлоши 3 студенти од Скопје
  .then((res) => {
    return Students.find(
      { rating: { $lte: 5 } },
      { "location.city": "Skopje", name: 1, lastname: 1, rating: 1 }
    )
      .limit(3)
      .sort({ rating: 1 });
  })
  .then((res) => {
    console.log("Најлоши 3 студенти од Скопје", res);
  })

  //! Најдобри 10 студенти од Скопје
  .then((res) => {
    return Students.find(
      { rating: { $gte: 5 }, "location.city": "Skopje" },
      { name: 1, lastname: 1, rating: 1, "location.city": "Skopje" }
    ).sort({ rating: -1 });
  })
  .then((res) => {
    console.log("Најдобри 10 студенти од Скопје", res);
  })

  //! Најдобри 3 студенти од Македонија.
  .then((res) => {
    return Students.find(
      { rating: { $gt: 9 } },
      { location: "Macedonia", name: 1, lastname: 1, rating: 1 }
    )
      .limit(3)
      .sort({ rating: -1 });
  })
  .then((res) => {
    console.log("Најдобри 3 студенти од Македонија", res);
  })

  //! Најлоши 5 студенти од Битола
  .then((res) => {
    return Students.find(
      {
        rating: { $gt: 1 },
        "location.city": "Bitola",
      },
      { lastname: 1, rating: 1, "location.city": "Bitola" }
    ).sort({ rating: 1 });
  })
  .then((res) => {
    console.log("Најлоши 5 студенти од Битола", res);
  })

  //! Приказ на студенти од Битола подредени по презиме
  .then((res) => {
    return Students.find(
      { "location.city": "Bitola" },
      { lastname: 1, rating: 1, "location.city": "Bitola" }
    ).sort({
      lastname: 1,
    });
  })
  .then((res) => {
    console.log("Приказ на студенти од Битола подредени по презиме", res);
  })

  //! Приказ на студенти од Куманово подредени по име
  .then((res) => {
    return Students.find(
      { "location.city": "Kumanovo" },
      { name: 1, rating: 1, "location.city": "Kumanovo" }
    ).sort({
      name: 1,
    });
  })
  .then((res) => {
    console.log("Приказ на студенти од Куманово подредени по име", res);
  })

  //! Приказ на најдобриот студент од Македонија
  .then((res) => {
    return Students.find(
      { rating: { $gt: 9.5 } },
      { location: "Macedonia", name: 1, lastname: 1, rating: 1 }
    )
      .limit(1)
      .sort({ rating: -1 });
  })
  .then((res) => {
    console.log("Приказ на најдобриот студент од Македонија", res);
  })
  .catch((err) => {
    console.log(err);
  });
