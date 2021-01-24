import { ItemResponse } from "../interfaces/itemsResponse";

export const buildItemsResponse = (request,author,item)=>{
    const{category_id}=request;
    const cetegories:any =[];
    cetegories.push(`${category_id}`);
    const itemResponse:ItemResponse={
        author,
        item,
        cetegories
    }
    return itemResponse;
}

export const buildItemsListResponse = (request,author,items)=>{
    const cetegories:any =request.map(e => e.category_id);
    const itemResponse:ItemResponse={
        author,
        items,
        cetegories
    }
    return itemResponse;
}