import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected To MongoDB.")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB Disconnected!");
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB Connected!");
})


app.listen(8800, () => {
    connect()
    console.log("Connected To BackEnd !")
})
