const express = require("express");
const cors = require("cors");
const { connexion } = require("../db/config");
//const userRouter = require("../routes/users");
const authRouter = require("../routes/auth");
const categorieRouter = require("../routes/categorie");
const hotelRouter = require("../routes/hotel");
const amenitieRouter = require("../routes/amenitie");
const roomRouter = require("../routes/room");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.path = {
      users: "/api/users",
      auth: "/api/auth",
      categorie: "/api/categorie",
      hotel: "/api/hotel",
      amenitite: "/api/amenitie",
      room: "/api/room",

 
    };
    this.connectDb();
    this.middlewares();
    this.routes();
  }

  async connectDb() {
    await connexion();
  }

  middlewares() {
    /*::::::::Using cors::::::::*/
    this.app.use(cors());

    /*::::::::Reading and writing from body:::::::*/
    this.app.use(express.json());
 
  }
  routes() {
    //this.app.use(this.path.users, userRouter);
    this.app.use(this.path.auth, authRouter);
    this.app.use(this.path.categorie, categorieRouter);
    this.app.use(this.path.hotel, hotelRouter);
    this.app.use(this.path.amenitite, amenitieRouter);
    this.app.use(this.path.room, roomRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Escuchando en el puerto ", this.port);
    });
  }
}

module.exports = Server;
