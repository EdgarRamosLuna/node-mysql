import {config as dotenv} from "dotenv";
dotenv();
console.log(process.env.DB_HOST);
export const config = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    port: process.env.DB_PORT || 3306,
}