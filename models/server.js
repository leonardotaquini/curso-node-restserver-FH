const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Midelwares
    this.middelwares();

    //Rutas de mi app
    this.routes();
  }

  middelwares() {
    //CORS.
    this.app.use( cors() );
    this.app.use( express.json() );
    
    //Directorio publico.
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user.routes'))
  }
  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server on port ${this.port}`)
    );
  }
}

module.exports = Server;
