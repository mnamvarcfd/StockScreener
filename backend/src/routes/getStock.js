import { Boom } from "@hapi/boom";
import { db } from "../dataBase";

export const getStocksRoute = {
    method: 'GET',
    path: '/api/allStocks/{id}',
    handler: async (req, h) => {
        const id = req.params.id;

        const { results } = await db.query( 'SELECT * FROM primaryprop WHERE id=?', id );
        const stock = results[0];
        if(!stock) throw Boom.notFound('stock does not exist with id ${id}')
        return stock;
    }
}