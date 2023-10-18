import express from 'express'
import cors from 'cors'
import { client } from './src/connectDB.js'
import { addMenuItem, getAllMenuItems } from './src/menu.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello!")
})

app.post("/menu", addMenuItem)

app.get("/menu", getAllMenuItems)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})

