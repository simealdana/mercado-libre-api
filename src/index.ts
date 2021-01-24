import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import searchProductRouter from './modules/searchProduct/routes/searchProductRoutes';

// Initializations
const PORT = process.env.PORT || 4000;
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("*",cors());
app.use(morgan('combined'));


// // Routes
 app.use('/items', searchProductRouter);

// Starting the Server
app.listen(PORT, () => {
    console.log(`Server on port`, PORT);
});