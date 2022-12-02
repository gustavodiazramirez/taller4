import Mensajes from "../models/message.model.js";

async function crearMensaje(req, res){

    try {
        const crearMensajes = await Mensajes.create({
            userId: req.body.userId,
            message: req.body.message,
        });
        return res.status(201).send({response: crearMensajes});
    } catch (error) {
        return res.status(400).send({ error });
    }
}

async function borrarMensaje(req, res){
    const mensajes = await Mensajes.delete();
    return res.status(200).send({ mensajes });
}

async function obtenerMensaje(req, res){
    const mensajes = await Mensajes.find();
    return res.status(200).send({ mensajes });
}

export{
    crearMensaje,
    borrarMensaje,
    obtenerMensaje,
};