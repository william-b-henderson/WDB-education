const axios = require("axios");
const express = require("express");
const fs = require("fs");
const port = 3000;
const app = express();

app.use(express.json()); // Utilities for request bodies
app.use(express.urlencoded({ extended: true })); // Utilities for query params

let counter = 0; // inner implementation
const stupidDB = {
    0 : "orange",
}; //initialize our DB

// http://localhost:3000/create/?name=resume&type=txt

app.get("/create", (req, res) => {
    let name = req.query.name;
    let type = req.query.type;
    let filename = name + "." + type;
    fs.appendFile(filename, " ", (err) => {
        if (err) res.send(err);
        res.send({
            message: "File created",
            name: name,
            type: type,
        })
    })
});


//GET Requests

//url, function
app.get("/", (req, res) => {
    //home page
    res.send("Welcome to stupidDB API");
})

app.get("/info/index", (req, res) => {
    //get the current index
    res.send({ counter: counter});
})

app.get("/info/capacity", (req, res) => {
    //get the capacity
    res.send({capacity: Object.keys(stupidDB).length });
})

app.get("/db/all", (req, res) => {
    //get all the items in the DB
    res.send(stupidDB);
})

app.get("/db/:id", (req, res) => {
    //get a certain item from the DB
    const id = req.params.id;
    if (id in stupidDB) {
        res.send(stupidDB[id]);
    }
    else {
        res.send({ error: "no object found with this id" });
    }
})

app.get('/nasa', (req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
  })

// POST Requests

app.post("/db", (req, res) => {
    console.log(req);
    const item = req.body.item; // access our request body
    stupidDB[counter] = item; // add body item at index
    counter += 1; // increment counter
    res.send(`POST Request Successful. Item placed: ${item}`); // Send HTTP response
  });
  
  // PUT Requests
  
  app.put("/db/:id", (req, res) => {
    const id = req.params.id; // get the index of the data to update
    const item = req.body.item; // access the body of the request which holds new data
    if (id in stupidDB) {
      stupidDB[id] = item; // insert destructively
      res.send({ newItem: item });
    } else {
      res.send({ error: "no object found with this id" });
    }
  });


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});