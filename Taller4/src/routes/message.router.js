import express from "express";

import{

    crearMensaje, 
    obtenerMensajes,
    borrarMensajes,

}

from "../controllers/message.controller.js";

const router = express.Router();
router.post("/messages", crearMensaje);
router.get("//users/:userId/messages", obtenerMensajes);
router.get("/messages/:messageId", borrarMensajes);


export default router;