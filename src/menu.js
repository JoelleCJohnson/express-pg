import { client } from "./connectDB.js"

export async function getAllMenuItems(req, res){
    const result = await client.query('SELECT * FROM menu')
    res.send(result.rows)
}