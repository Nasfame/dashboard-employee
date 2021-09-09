import Employee from '../models/employee.js'

const deleteEmployee = (req, res) => {
  const id = +req.params.id
  Employee.destroy({ where: { id: id } })
    .then(() => res.json('Successfully deleted'))
    .catch(err => {
      res.status(500)
      console.error(err)
    })
}

export default deleteEmployee
