import connectionString from "./secrets.js";
import pg from "pg";
const { Client } = pg

export const client = new Client({
    connectionString
})

await client.connect()
    .catch(console.error)

