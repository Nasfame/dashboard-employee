import Employee from '../models/employee.js'

const addEmployee = async (req, res) => {
  const { name, designation } = await req.body
  Employee.create({ name, designation })
    .then(emp => res.json('Success'))
    .catch(err => {
      res.status(500)
      console.error(err)
    })
}

export default addEmployee
