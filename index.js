const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')
const helmet = require("helmet");
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}));

const whitelist = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null,true);
    }else {
      callback(new Error('not allowed'))
    }
  }
}
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
  res.send('hello world');
});
// new route
app.get('/new-route', (req, res) => {
  res.send('im a new route');
});
//using routerApi(app)
routerApi(app)

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(ormErrorHandler);

// app listening on port
app.listen(port, () => {
  console.log('server running on ' + port);
});

// Developed by JColamaio
