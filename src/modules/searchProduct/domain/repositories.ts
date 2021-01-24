import { Item, Price } from "./entities"

export const BuildItem = (items)=>{
    const{id,title,price,currency_id,thumbnail,condition,shipping}=items;
    const prices:Price={
        currency:currency_id,
        amount:price,
        decimals:11
    }
    const item:Item = {
        id,
        title,
        price:prices,
        picture:thumbnail,
        conditional:condition,
        free_shipping:shipping.free_shipping
    }
    return item;
}