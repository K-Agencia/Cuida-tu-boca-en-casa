exports.get_data_auth = (req, res, next) => {

   const base64Credentials = req.headers.authorization.split(' ')[1];
   const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
   const [correo, password] = credentials.split(':');

   req.auth = { correo, password };
   next();
}