const express = require('express');
const { get_data_auth } = require('../midellware/get_data_auth');
const { login, registrarse } = require('../midellware/controller_db');
const { send_data } = require('../midellware/send_data');
const path = require('path'); 

const app = express();

app.get("/login", get_data_auth, login, send_data);

app.post("/registro", registrarse)

app.get('/descargar/:name', (req, res) => {

   const { name } = req.params;
   res.download(path.join(__dirname, '../videos', name), name, (err) => {
      if (!err) {
         console.log(`Video descargado: ${name}`);
      } else {
         console.log(err)
      }
   });

})

module.exports = app;