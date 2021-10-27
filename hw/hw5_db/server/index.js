const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const path = require('path');
const url = 'mongodb://127.0.0.1:27017/node-mongo-hw'; // change this as needed
const app = express();
const db = mongoose.connection

mongoose.connect(url, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const item = new Schema({
  date: String,
  title: String,
  url: String,
  paragraph: String,
})

const APOD = mongoose.model("APOD", item);




db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})






app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '1mb'}));
app.use(express.static('../client'));


var router = express.Router();


// The method of the root url. Be friendly and welcome our user :)
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the APOD app.' });   
});

router.post('/favorite', function(req, res) {
  console.log(req.body);
  const apod = new APOD({
    date: req.body.date,
    title: req.body.apod_title,
    url: req.body.url,
    paragraph: req.body.paragraph, 
  })
  apod.save((error, document) => {
    if (error) {
      res.json({status: "failure"})
    }
    else {
      res.json({
        status: "success",
        id: apod._id,
        content: req.body,
      })
    }
  })
})

router.get('/all', (req, res) => {
  APOD.find().then((apods) => {
    res.json({apods: apods})
  });
});

router.delete('/clear', (req, res) => {
  APOD.deleteMany({}, err => {
    if (err) {
      console.log(err);
    }
    else {
      res.json({status: 'success'});
    }
  });
})


// router.get('/home', function(req, res) {
//   res.render(path.join(__dirname, '..','client/home'));
// });

app.use('/api', router); // API Root url at: http://localhost:8080/api


app.listen(port);
console.log('Server listening on port ' + port);