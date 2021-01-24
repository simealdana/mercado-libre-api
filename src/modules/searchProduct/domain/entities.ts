export interface Item {
    id: string
    title: string
    price:Price
    picture:string
    conditional:string
    free_shipping:boolean,
    description?:string
}

export interface Price{
    currency:string
    amount:number
    decimals:number
}