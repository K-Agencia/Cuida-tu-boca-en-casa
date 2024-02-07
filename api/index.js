const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/routes/router.js');
const { errorHandling } = require('./src/midellware/errorHandling.js');

const port = process.env.PORT || 3157;

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.urlencoded({
   extended: false
}));
app.use(express.json());

app.use(routes);
app.use(errorHandling);

app.listen(port, (err) => {
   console.log(`Server run port ${port}`);
})