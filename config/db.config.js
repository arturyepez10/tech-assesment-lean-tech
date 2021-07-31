require('dotenv').config();

/* 
    This is the pool of connections for MYSQL. With this information provided by the environmental variables
    we create and connect to the database.
*/
module.exports = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DATABASE,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};