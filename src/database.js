import mysql from "mysql2/promise";
//import mysql from "mysql2/promise";
import { config } from "./config";

// export async function connect() {
//     const connection = await mysql.createConnection(config);
//     return connection;
// }
export const connect = async () => {
    return await mysql.createPool(config);
    
    // const [rows] = await conn.query('SELECT 1 + 1');
    // //const result = await conn.query('SELECT 1 + 1');
    // console.log(rows);
}
connect();
