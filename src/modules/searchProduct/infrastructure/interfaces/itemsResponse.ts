export interface ItemResponse {
    author:Author
    items?:[Item] 
    item?:Item
    cetegories:[string]
}

interface Item {
    id: string
    title: string
    price:Price
    picture:string
    conditional:string
    free_shipping:boolean,
    description?:string
}

interface Price{
    currency:string
    amount:number
    decimals:number
}

interface Author{
    name:string
    lastname:string
}

