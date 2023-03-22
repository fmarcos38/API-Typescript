import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
};

const getItem = async (req: Request , res:Response) => {
    try {
        const { id } = req.params; //console.log("id:", id);
        const resp = await getCar(id);
        res.send(resp);
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

const updateItem = async (req: Request , res:Response) => {
    
    try {
        const { id } = req.params; //console.log("id", id);
        //console.log("data", req.body);
        const resp = await updateCar(id, req.body);
        res.send(resp);
    } catch (error) {
        handleHttp(res, 'Error_UPDATE_ITEMS');
    }
};

const deleteItem = async (req: Request , res:Response) => {
    try {
        const { id } = req.params;
        const resp = await deleteCar(id);
        res.send(resp);
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