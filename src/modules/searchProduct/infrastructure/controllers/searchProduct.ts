import { Request, Response } from 'express';
import { getItemById, getItemsByName, } from '../../application/searchItemsy';
import { getDescriptionProductById, getProductById, getProductByQuery } from '../services/fetchingSearProduct';
import { buildItemsListResponse, buildItemsResponse } from '../services/itemsRepository';
const {validationResult} = require('express-validator')

export const SearchProductByProduct = async(req: Request, res: Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array()});
    const {q} = req.query;
    const {name,lastname}=req.body;
    const query ={
        productName:q
    };
    const {response,error} = await getProductByQuery(query);
    if(error)res.status(500).json({error:"Internal error server"});
    const {items} = await getItemsByName(response.results);
    const author ={name,lastname};
    const itemsResponse = buildItemsListResponse(response.results,author,items)
    res.status(200).json({itemsResponse,error});
}

export const SearchProductByid = async(req: any , res: Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const {id} = req.params;
    const {name,lastname}=req.body;
    if(!id) res.status(400).json({error:"Bad request"});

    const query ={
        productId:id
    };

    const {response,error} = await getProductById(query);

    if(error)res.status(500).json({error:"Internal error server"});
    const author ={name,lastname};
    let item = await getItemById(response);
    const description:any = await getDescriptionProductById(query);
    item.description = description.response.plain_text;
    const itemResponse = buildItemsResponse(response,author,item);

    res.status(200).json({itemResponse});
}