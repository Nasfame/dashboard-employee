import { Sequelize } from "sequelize"

const sequelize = new Sequelize("sequelize", "root", "1234", {
    dialect: "sqlite",
    storage: "./db"
})

export default sequelize


