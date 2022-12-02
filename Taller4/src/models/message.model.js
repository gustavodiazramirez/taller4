import mongoose from "mongoose";
const mensajeSchema = new mongoose.Schema({
    
    userId:{
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const mensajeModelo = mongoose.model("Mensaje", mensajeSchema);
export default mensajeModelo;