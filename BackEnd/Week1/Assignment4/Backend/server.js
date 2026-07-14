import express from 'express'
import connectDb from './database/mongodb.js'
import route from './routes/route.js'
import cors from 'cors'


const app = express()
app.use(cors({
    origin:"*",
    methods:['GET','POST','DELETE','PUT']
}))
app.use(express.json())
app.use(route)

const port = 4000

connectDb()

app.listen(port, () => {
    console.log('server has started on port: ', port)
})