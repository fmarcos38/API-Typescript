import { NextFunction, Request, Response } from "express";
//import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req.ext";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";//minuto 1.57.00 del video EXPLICA donde viene el token dsd el FRONT
    //console.log(jwtByUser);
    const jwt = jwtByUser.split(" ").pop(); // 11111
    //console.log(jwt);
    const isUser = verifyToken(`${jwt}`) as { id: string };
    //console.log(isUser);
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };