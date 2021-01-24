import { BuildItem } from "../../../modules/searchProduct/domain/repositories";

describe('Repository Items', ()=> {

    it('Build item Objetc', async ()=> {
        const request = {
            id: "MLA901421848",
            title: "iPhone 11 64 Gb Negro",
            currency_id: "ARS",
            thumbnail: "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
            price:169999,
            shipping:{free_shipping:true},
            condition:"new"
        }
        const item = BuildItem(request);
        expect(item).toEqual({
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