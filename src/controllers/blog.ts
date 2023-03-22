import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItems = (req: Request , res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error_GET_BLOG');
    }
};

const getItem = (req: Request , res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error_GET_BLOG');
    }
};

const postItem = (req: Request , res:Response) => {
    const body = req.body;
    try {
        res.send(body);
    } catch (error) {
        handleHttp(res, 'Error_POST_BLOG');
    }
};

const updateItem = (req: Request , res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error_UPDATE_BLOG');
    }
};

const deleteItem = (req: Request , res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'Error_DELETE_BLOG');
    }
};

export {
    getItem,
    getItems,
    postItem,
    updateItem,
    deleteItem
};