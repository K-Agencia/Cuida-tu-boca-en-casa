const { crearToken } = require('../midellware/token');

exports.send_data = (req, res, next) => {
  const { data } = req.body;

  if (data.length !== 0) {
    const { idOodntologo, nombreOodntologo, apellidoOodntologo } = data[0];

    res.send({
      token: crearToken(data[0]),
      idOodntologo, nombreOodntologo, apellidoOodntologo
    })

  } else {
    res
      .status(404)
      .send("El correo electrónico es incorrecto")
  }
}