const { Query } = require("../config/database");

exports.login = (req, res, next) => {

  const { correo } = req.auth;

  const querySelect = 'SELECT * FROM colgate_pass WHERE correoElectronicoOodntologo = ? LIMIT 1;'

  Query(querySelect, [correo])
    .then((response) => {
      req.body.data = response;
      next();
    })
    .catch((err) => next(err))

}

exports.registrarse = async (req, res, next) => {

  const {
    noIdentificacion,
    nombre,
    apellido,
    direccion,
    ciudad,
    correo,
    celular,
    especialidad
  } = req.body

  const querySelect = 'SELECT count(*) AS cantidad FROM colgate_pass WHERE noDocumentoOodntologo=?;';
  const queryInsert = 'INSERT INTO colgate_pass VALUES (NULL,?,?,?,?,?,?,?,?,NULL);';

  const existe = await Query(querySelect, [noIdentificacion])
    .then((response) => {
      return parseInt(response[0].cantidad);
    })
    .catch((err) => next(err));

  if (existe === 0) {
    Query(queryInsert, [
      noIdentificacion,
      nombre,
      apellido,
      direccion,
      ciudad,
      correo,
      celular,
      especialidad
    ])
      .then(() => {
        res.send("Registro Exitoso");
      })
      .catch((err) => next(err));
  } else {
    res.status(403).send("Este usuario ya se encuentra registrado");
  }

}