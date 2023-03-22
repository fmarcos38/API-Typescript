import "dotenv/config";
import express from "express";
import cors from "cors";
import dbConnect from "./config/mongo"; //config mongoo

//--importo rutas
import { router } from "./routes/item";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json()); //con esto habilito q pueda recibir formato json por body
//--instancio rutas
app.use(router);
//--instacio conexión mongoo
dbConnect().then(() => console.log("Conexión lista"));



app.listen(PORT, () => console.log(`Escuchando por el puerto ${PORT}`));

