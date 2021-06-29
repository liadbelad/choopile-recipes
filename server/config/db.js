const mysql = require("mysql2")

const connectDB = () => {
  try {
    const db = mysql.createConnection({
      user: "root",
      host: "localhost",
      password: "nov13pazam!",
      database: "choopile-recipes-test",
    })
    console.log(`MySql database is connected`.cyan.underline)
    return db
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
  }
}

module.exports = connectDB
