const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// CONNECT TO DB
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
    const port = 4052;
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch(err => console.log(err));


// ENDPOINTS
const foodCtrl = require('./controllers/foodControllers.js');
app.get('/api/food', foodCtrl.getFoods);
app.get('/api/food/:id', foodCtrl.getFoodById);
