import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const usuarioModelo = mongoose.model("Usuario", usuarioSchema);
export default usuarioModelo;