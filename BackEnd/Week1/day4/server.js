import express from 'express'
import connectDb from './database/mongodb.js'
import route from './routes/route.js'

const app = express()

app.use(express.json())
app.use(route)

const port = 4000

connectDb()

app.listen(port, () => {
    console.log('server has started on port: ', port)
})