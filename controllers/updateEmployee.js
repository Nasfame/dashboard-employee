import Employee from '../models/employee.js'

const updateEmployee = (req, res) => {
  const id = +req.params.id
  const data = req.body

  Employee.findByPk(id)
    .then(emp => emp.update(data))
    .then(update => res.json(update))
    .catch(err => {
      res.status(500)
      console.error(err)
    })
}

export default updateEmployee
