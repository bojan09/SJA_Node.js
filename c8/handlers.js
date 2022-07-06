const home = (req, res) => {
  res.send("OK Home");
};

const calculator = (req, res) => {
  // Takes two parameters home and the callback function (req,res)
  // getting the parameter
  //   from the req url, take out the operation
  // this means that it will match the following
  // calc/plus
  // calc/minus;
  // calc/mnozenje
  // calc/delenje

  console.log(req.query); // prints the URL параметарот operation from /calc/operation

  // the results
  let result;
  // the operations
  switch (req.params.operation) {
    case "plus":
      result = Number(req.query.a) + Number(req.query.b);
      break;

    case "minus":
      result = Number(req.query.a) - Number(req.query.b);
      break;

    case "mnozenje":
      result = Number(req.query.a) * Number(req.query.b);
      break;

    case "delenje":
      result = Number(req.query.a) / Number(req.query.b);
      break;

    default:
      result = 0;
  }

  res.send(result.toString());
}; //http method GET

const calculator2 = (req, res) => {
  console.log(res.body); // во res.body ги има JSON податоците испратени од клиентската страна
  res.send("OK Calc");

  // the results
  let result;
  // the operations
  switch (req.params.operation) {
    case "plus":
      result = Number(req.body.a) + Number(req.body.b);
      break;

    case "minus":
      result = Number(req.body.a) - Number(req.body.b);
      break;

    case "mnozenje":
      result = Number(req.body.a) * Number(req.body.b);
      break;

    case "delenje":
      result = Number(req.body.a) / Number(req.body.b);
      break;

    default:
      result = 0;
  }

  res.send(result.toString());
};

module.exports = {
  home,
  calculator,
  calculator2,
};
