import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import db from './config/db'
import { router } from './routes';
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
db()
app.listen(PORT, ()=> console.log(`servidor funcionando correctamente el puerto http://localhost:${PORT}`))