import express from "express";

import{
    
    crearUsuario,
    obtenerUsuario,

}

from "../controllers/user.controller.js";

const router = express.Router();

router.post("/auth/register", crearUsuario);
router.get("/users", obtenerUsuario);

export default router;