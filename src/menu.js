import { client } from "./connectDB.js"

export async function getAllMenuItems(){
    const result = await client.query('SELECT * FROM menu')
    result.send(result.rows)
}