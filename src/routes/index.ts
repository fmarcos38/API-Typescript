/* 
todo este arch de mierda para nombrar las rutas con el nombre del archivo
ej items.ts --> le quito el .ts

*/

import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 *
 * @returns
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
        router.use(`/${cleanName}`, moduleRouter.router);
    });
    }
});

export { router };