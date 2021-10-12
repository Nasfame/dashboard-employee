import Express from 'express'
import cors from 'cors'
import initDB from './utils/initDB.js'
import employeeRoutes from './routes/employee.js'

const app = Express()
const port =  process.env.PORT || 3237
app.listen(port, () => console.log(`server is running on ${port}`))

initDB()

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())

app.use('/employee', employeeRoutes)

app.get('/', (req, res) => res.json('Admin Dashboard'))
