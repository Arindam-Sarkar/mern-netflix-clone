import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import userRouter from './routes/UserRoute.js'
import { createErrorMsg, sendErrorResponse } from './utils/Errors.js'


const app = express()
dotenv.config()

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_KEY)
  } catch (error) {
    console.log(error)
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('Mongo Db disconnected')
})

mongoose.connection.on('connected', () => {
  console.log('Mongo Db Connected')
})

app.use(cookieParser())
app.use(express.json())

app.use(cors())
app.options('*', cors())
app.use("/api/user/", userRouter)
app.use(sendErrorResponse)


app.listen((8800), () => {
  connect()
  console.log('listening on port 8800');
})