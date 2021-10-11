var Sequelize=require('sequelize')
require('dotenv').config()

console.log("DBNAME : "+process.env.db_name)

const sequelize=new Sequelize(
        
        process.env.db_name,
        process.env.db_user,
        process.env.db_password, 
        {
            host: process.env.host,
            dialect: 'mysql',
            define:{
                timestamps: false
            }
        }
)

module.exports=sequelize