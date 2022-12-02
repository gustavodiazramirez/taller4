import mongoose from "mongoose";
import {MONGO_URI} from "./environment.js";

export default function connectDB (){
    
    return mongoose
        .connect(MONGO_URI)
        .then(async () => {
        console.log("MongoDB ha establecido conexión exitosamente");
        await registrarModelo();
        return true;
    })
    .catch((error)=>{
        console.log(`MongoDB no ha establecido conexión exitosamente. Error: ${error}`);
        return false;
    });
}
async function registrarModelo(){
    await import("../models/user.model.js");
}