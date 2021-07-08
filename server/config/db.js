// const mysql = require("mysql2")

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "nov13pazam!",
//   database: "choopile-recipes-test",
// })

// db.connect((err) => {
//   if (err) {
//     console.error(`Error: ${err.message}`.red.underline.bold)
//     process.exit(1)
//   }
//   console.log(`MySql database is connected`.cyan.underline)
// })

// module.exports = db

async function connectDB() {
  // get the client
  const mysql = require("mysql2/promise")
  // create the connection
  const connection = await mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "nov13pazam!",
    database: "choopile-recipes-test",
  })

  console.log(`MySql database is connected`.cyan.underline)

  return connection
}

const connection = connectDB()
module.exports = connection
