import { statSync } from 'fs'

import sequelize from './database.js'

const initDB = (dev = false) => {
  try {
    if (dev) throw new Error('Development On')
    statSync('./db')
  } catch (err) {
    console.log(err)
    createDB()
  }
}

const createDB = () => {
  sequelize
    .sync({ force: true })
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

export default initDB
