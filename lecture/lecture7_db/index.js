const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/database-tutorial';

var router = express.Router()

app.use(express.json()); // Utilities for request bodies
app.use(express.urlencoded({ extended: true })); // Utilities for query params



mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

const Schema = mongoose.Schema;

const item = new Schema({
    title: String,
    task: String,
	date: String,
	urgency: Number,
});

const TODO = mongoose.model("TODO", item);

//BEGINNING OF CURD

//CREATE
router.post("/db", (req, res) => {
    const todo = new TODO({        // Create TODO item with the appropriate fields
          title: req.body.title,
          task: req.body.task,
          date: req.body.date,
          urgency: req.body.urgency,
      })
    todo.save((error, document) => {
        if (error) {
            res.json({ status : "failure"})
        }
        res.json({               // Save TODO item to the database
            status: "success",
            id: todo._id,
            content: req.body
        })
    })
  });

//RETRIEVE
router.get("/db/all", (req, res) => {
    TODO.find().then((todos) => {
        res.json({ message: 'Return all todos.', todos: todos})
    })
});

router.route("/db/:id")
	.get((req, res) => {
	  // get a certain item from the db
		TODO.findById(req.params.id, (error, todo) => {
			if (error) {
				res.json({ status: "failure" })
			} else {
				res.json(todo)
            }
	    })
	})
	.delete("/db/:id", (req, res) => {});

    //UPDATE
    router.route("/db/:id")
	.get((req, res) => {
	  // get a certain item from the db
	  const id = req.params.id;
		TODO.findById(req.params.id, (error, todo) => {
			if (error) {
					res.json({ status: "failure" })
			} else {
					res.json(todo)
            }
	  })
	})
	.put("/db/:id", (req, res) => {
        //This way is risky, don't use req.body, you should extract every field and write it into a new object
	  TODO.findByIdAndUpdate(req.params.id, req.body, (error, todo) => {
			if (error) {
				res.json({ status: "failure" })
            }
			else {
				res.json(todo)
			}
	    })
    })
	.delete("/db/:id", (req, res) => {})

//DELETE
router.route("/db/:id")
	.get((req, res) => {
		TODO.findById(req.params.id, (error, todo) => {
			if (error) {
					res.json({ status: "failure" })
			} else {
					res.json(todo)
            }
	    })
	})
	.put("/db/:id", (req, res) => {
	    TODO.findByIdAndUpdate(req.params.id, req.body, (error, todo) => {
			if (error) {
				res.json({ status: "failure" })
            }
			else {
				res.json(todo)
			}
        })
	})
	.delete("/db/:id", (req, res) => {
		TODO.findByIdAndDelete(req.params.id, (error, todo) => {
			if (error) {
				res.json({ status: "failure"})
			} else {
				res.json(todo)
			}
        })
	})

// // GET Requests

// router.get("/", (req, res) => {
//   // homepage
//   res.send("stupidDB API");
// });

// router.get("/info/index", (req, res) => {
//   // get the current index
//   res.send({ counter: counter });
// });

// router.get("/info/capacity", (req, res) => {
//   // get the capacity
//   res.send({ capacity: Object.keys(stupidDB).length });
// });

// router.get("/db/all", (req, res) => {
//   // get all items from the db
//   res.send(stupidDB);
// });

// // Combining endpoints into a single "route"

// router.route("/db/:id")
// 	.get((req, res) => {
// 	  // get a certain item from the db
// 	  const id = req.params.id;
// 	  if (id in stupidDB) {
// 	    res.send(stupidDB[id]);
// 	  } else {
// 	    res.send({ error: "no object found with this id" });
// 	  }
// 	})
// 	.put("/db/:id", (req, res) => {
// 	  const id = req.params.id;   // get the index of the data to update
// 	  const item = req.body.item; // access the body of the request which holds new data
// 	  if (id in stupidDB) {
// 	    stupidDB[id] = item;      // insert destructively
// 	    res.send({ newItem: item });
// 	  } else {
// 	    res.send({ error: "no object found with this id" });
// 	  }
// 	})
// 	.delete("/db/:id", (req, res) => {});

// // POST Requests

// router.post("/db", (req, res) => {
//   console.log(req);
//   const item = req.body.item; // access our request body
//   stupidDB[counter] = item;   // add body item at index
//   counter += 1;               // increment counter
//   res.send(`POST Request Successful. Item placed: ${item}`); // Send HTTP response
// });

// // Server Setup

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
