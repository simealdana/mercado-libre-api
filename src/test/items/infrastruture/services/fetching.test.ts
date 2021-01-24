import { getProductByQuery } from "../../../../modules/searchProduct/infrastructure/services/fetchingSearProduct";
import axios from '../../../../axiosConfig';

jest.mock('../../../../axiosConfig', () => {
    return {
        baseURL: "https://api.mercadolibre.com",
        request: jest.fn().mockResolvedValue({
            data: {
                "site_id": "MLA",
                "query": "iphone",
                "results":[{
                    "id": "MLA901421848",
                    "site_id": "MLA",
                    "title": "iPhone 11 64 Gb Negro",
                    "seller": {},
                    "price": 169999,
                    "prices": {
                    },
                    "sale_price": null,
                    "currency_id": "ARS",
                    "available_quantity": 8,
                    "sold_quantity": 8,
                    "buying_mode": "buy_it_now",
                    "listing_type_id": "gold_special",
                    "stop_time": "2040-12-12T04:00:00.000Z",
                    "condition": "new",
                    "permalink": "https://www.mercadolibre.com.ar/iphone-11-64-gb-negro/p/MLA15149561",
                    "thumbnail": "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
                    "accepts_mercadopago": true,
                    "installments": {},
                    "address": {        
                        "state_id": "AR-S",
                        "state_name": "Santa Fe",
                        "city_id": null,
                        "city_name": "Rosario"
                    },
                    "shipping": {},
                    "seller_address": {},
                    "attributes": [],
                    "original_price": null,
                    "category_id": "MLA1055",
                    "official_store_id": null,
                    "domain_id": "MLA-CELLPHONES",
                    "catalog_product_id": "MLA15149561",
                    "tags": [],
                    "catalog_listing": true,
                    "order_backend": 1
                }]
            }
        }),
    }
});

describe('test getPhotosByAlbumID ', () => {
    afterEach(() => jest.resetAllMocks());

    it('fetches to with iphone like query ', async () => {
        const items:any = await getProductByQuery({productName:"iphone"});
        axios.request();
        expect(axios.request).toHaveBeenCalled();
        expect(items.response.query).toEqual("iphone");
        expect(items.error).toEqual(false);
    });
})
