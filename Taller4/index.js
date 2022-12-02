import express from "express";
import usuarioRouter from "./src/routes/user.router.js";
import mensajeRouter from "./src/routes/message.router.js";
import { PORT } from "./src/configs/environment.js";
import mongo from "./src/configs/mongo.js";

const app = express();
app.use(express.json());
async function iniciarServidor(){
    const estaConectado = await mongo();
    if(estaConectado) {
        app.listen(PORT, () => {
            console.log(`Server iniciado en el puerto ${PORT}`);
        });
    }else{
        process.exit();
    }
}
iniciarServidor();
app.get('/', (req, res) => {
    const student = [{nombre: "Gustavo Díaz Ramírez", titulo: "/Taller 4"}];
    const unir = student[0].nombre + student[0].titulo;
    res.send(`${unir}`);
});

app.use("/auth", usuarioRouter);
app.use("/users", usuarioRouter);
app.use("/message", mensajeRouter);
app.use("/users", mensajeRouter);