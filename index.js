import * as dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import appsRoutes from './routes/Apps.js'
dotenv.config()

const app = express()

app.use(bodyParser.json({ limit: "30mb", extender: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extender: true}))
app.use(cors())

app.use('/apps', appsRoutes)

const PORT = process.env.PORT || 3001

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => 
        console.log(`Server running on port: ${PORT}`)
    ))
    .catch((err) => 
        console.log(err) )

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}