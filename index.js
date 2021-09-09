import Express from 'express'
import sequelize from './utils/database.js'
import employeeRoutes from './routes/employee.js'

const app = Express()
const port = 3237
app.listen(port, () => console.log(`server is running on ${port}`))

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use('/employee', employeeRoutes)

app.get('/', (req, res) => res.json('Admin Dashboard'))

sequelize
  .sync({ force: true })
  .then(res => console.log(res))
  .catch(err => console.error(err))
