import { StockPropertiesLinstings } from "./dataFile";
import { db } from "../dataBase";


export const getAllStocksRoute = {
    method: "Get",
    path: '/api/allStocks',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM primaryprop'
        );
        return results;
    }
}