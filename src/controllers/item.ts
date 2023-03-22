import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar } from "../services/item";

const getItems = (req: Request , res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error_GET_ITEMS');
    }
};

const getItem = (req: Request , res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error_GET_ITEM');
    }
};

const postItem = async (req: Request , res:Response) => {
    const responseItem = await insertCar(req.body);
    try {
        res.send(responseItem);
    } catch (error) {
        handleHttp(res, 'Error_POST-ITEM');
    }
};

const updateItem = (req: Request , res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error_UPDATE_ITEMS');
    }
};

const deleteItem = (req: Request , res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error_DELETE_ITEMS');
    }
};

export {
    getItem,
    getItems,
    postItem,
    updateItem,
    deleteItem
};