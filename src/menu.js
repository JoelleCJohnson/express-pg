import { client } from "./connectDB.js"

export async function getAllMenuItems(req, res){
    const result = await client.query('SELECT * FROM menu')
    res.send(result.rows)
}

export async function addMenuItem(req, res){
    const body = req.body
    // const id = body.id
    // const name = body.name
    // const description = body.description
    // const price = body.price
    const { id, name, description, price } = body //destructuring, same as doing lines 10 - 13 but much shorter/ easier

    const result = await client.query(`INSERT INTO menu (id, name, description, price)
    VALUES(${id}, '${name}', '${description}', ${price})`)

    res.send(result)
}