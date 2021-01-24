import { buildItemsResponse } from "../../../../modules/searchProduct/infrastructure/services/itemsRepository";

const author={name:"simeon",lastname:"aldana"};
const item ={
    id: "MLA901421848",
    title: "iPhone 11 64 Gb Negro",
    price: {
        "currency": "ARS",
        "amount": 169999,
        "decimals": 11
    },
    picture: "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
    conditional: "new",
    free_shipping: true
};
const request ={category_id:"MLA1055"}; 

describe('Items response repository', ()=> {

    it('build Items Response', async ()=> {
      const items = await buildItemsResponse(request,author,item);
      const response ={
        itemResponse: {
                author: {
                    name: "simeon",
                    lastname: "aldana"
                },
                item: {
                    id: "MLA901421848",
                    title: "iPhone 11 64 Gb Negro",
                    price: {
                        currency: "ARS",
                        amount: 169999,
                        decimals: 11
                    },
                    picture: "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
                    conditional: "new",
                    free_shipping: true
                },
                cetegories: [
                    "MLA1055"
                ]
            }
        }
        expect(items).toEqual(response.itemResponse);
    });
  
  }); 
