import { Item } from "../domain/entities";
import { BuildItem } from "../domain/repositories";

export const getItemsByName = async(items)=>{
    let error = false;
    if(!items) error=true;
    const newItems=[];
    items.forEach((item:Item,index:number) => {
        if(index < 4){
            const itemBuild = BuildItem(item);
            newItems.push(itemBuild);
        }
    });
    return {items:newItems,error:error};
}

export const getItemById = async(items) => {
    const item:Item = await BuildItem(items);
    return item;
}

