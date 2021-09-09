import express from 'express'
import getEmployee from '../controllers/getEmployee.js'
import addEmployee from '../controllers/addEmployee.js'
import deleteEmployee from '../controllers/deleteEmployee.js'
import updateEmployee from '../controllers/updateEmployee.js'

const router = express.Router()

router.post('/', addEmployee)

router.get('/', getEmployee)

router.delete('/:id', deleteEmployee)

router.patch('/:id', updateEmployee)

export default router
