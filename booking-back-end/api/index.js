import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'

const app = express()
dotenv.config()

const connect = async () => {

  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('disconnected', () => {
  console.log("mongoDB disconnected!");
})

// app.get('/', (req, res) => {
//   res.send('Hello, first request!')
// })
 
// middlewares
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/hotels', hotelsRouter)
app.use('/api/rooms', roomsRouter)

app.listen(8800, () => {
  connect()
  console.log("Connected to backend!");
})