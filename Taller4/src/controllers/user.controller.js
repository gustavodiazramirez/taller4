import Usuario from "../models/user.model.js";
import bcrypt from "bcrypt"; //no supe utilizarla

async function crearUsuario(req, res){
    try {
        const crearUsuarios = await Usuario.create({
            name: req.body.name,
            email: req.body.email,
            dni: req.body.dni,
            password: req.body.password
        });
        return res.status(201).send({response: crearUsuarios});
    } catch (error) {
        return res.status(500).send({ error });
    }
}

async function obtenerUsuario(req, res){
    const usuario = await Usuario.find();
    return res.status(200).send({ usuario });
}

export{

    crearUsuario,
    obtenerUsuario,

};