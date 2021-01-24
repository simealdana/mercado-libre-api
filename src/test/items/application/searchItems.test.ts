import { getItemById, getItemsByName } from "../../../modules/searchProduct/application/searchItemsy";

const item = [
    {
        id: "MLA901421848",
        title: "iPhone 11 64 Gb Negro",
        currency_id: "ARS",
        thumbnail: "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
        price:169999,
        shipping:{free_shipping:true},
        condition:"new"
    }
]

describe('Get item by id', ()=> {

    it('Return item', async ()=> {
      const newItem = await getItemById(item[0]);
      expect(newItem).toEqual({
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
        });
    });
  
}); 

describe('Get items by query or name', ()=> {

    it('Return item List', async ()=> {
        const {items,error} = await getItemsByName(item);
        expect(error).toEqual(false)
        expect(items).toEqual(          
            expect.arrayContaining([      
              expect.objectContaining({
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
                })
            ])
          );
    });
    
  });