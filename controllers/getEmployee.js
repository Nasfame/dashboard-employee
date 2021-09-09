import Employee from '../models/employee.js'

const getEmployee = (req, res) => {
  Employee.findAll()
    .then(data => res.json(data))
    .catch(err => {
      res.status(500)
      console.error(err)
    })
}

export default getEmployee
