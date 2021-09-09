import express from 'express'
import Employee from '../models/employee.js'

const router = express.Router()

router.post('/', (req, res) => {
  const { name, designation } = req.body
  console.log(req.body)
  Employee.create({ name, designation })
    .then(emp => res.json('Success'))
    .catch(err => {
      res.status(500)
      console.error(err)
    })
})

router.get('/', (req, res) => {
  Employee.findAll()
    .then(data => res.json(data))
    .catch(err => {
      res.status(500)
      console.error(err)
    })
})

router.delete('/:id', (req, res) => {
  const id = +req.params.id
  Employee.destroy({ where: { id: id } })
    .then(() => res.json('Successfully deleted'))
    .catch(err => {
      res.status(500)
      console.error(err)
    })
})

router.patch('/:id', (req, res) => {
  const id = +req.params.id
  const data = req.body

  Employee.findByPk(id)
    .then(emp => emp.update(data))
    .then(update => res.json(update))
    .catch(err => {
      res.status(500)
      console.error(err)
    })
})

export default router
