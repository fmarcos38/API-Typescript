import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();
//minuto de video 2:11:00 como utiliza postman para manipulación de archivos
//en postman --> POST http://localhost;3002//uplad
//pestaña Body --> selecciono opc form-data --> en Key: myfile, Value: Select Files
//elijo el archivo DONDE esté. 
router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);//para multiples archivos --> multerMiddleware.array("myfile")

export { router };