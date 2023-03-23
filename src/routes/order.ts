import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middleware/session";
/**
 * Esta ruta solo puede acceder las personas que tienen session activa!
 * que tenga un JWT valido!
 */
const router = Router();

router.get("/", checkJwt, getOrders);

export { router };