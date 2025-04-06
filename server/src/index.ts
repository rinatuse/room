import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact'

dotenv.config()

const app = express()
const PORT = process.env.PROT || 3000

app.use(cors())
app.use(express.json())

app.use('api/contact', contactRoutes)

app.get('api/helth', (req, res) => {
    res.status(200).json({status: 'OK', message: 'API is running'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}`)
})

export default app