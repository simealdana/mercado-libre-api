import { Router } from 'express';
import { SearchProductByid, SearchProductByProduct } from '../infrastructure/controllers/searchProduct';
const { body, query } =require('express-validator') ;


class SearchProductRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', 
        body('name').notEmpty(),
        body('lastname').notEmpty(),
        query('q').not().isEmpty(), 
        SearchProductByProduct
        );

        this.router.post('/:id',
        body('name').notEmpty(),
        body('lastname').notEmpty(),
        SearchProductByid
        )
    }

}



const searchProductRouter = new SearchProductRouter();
export default searchProductRouter.router;