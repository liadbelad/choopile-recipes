const express = require("express")
const colors = require("colors")
const cors = require("cors")
const connectDB = require("./config/db")

const db = connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.post("/api/users", (req, res) => {
  const { firstName, lastName, email, password } = req.body

  db.query(
    `INSERT INTO users (first_name,last_name,email,password)
    VALUES(?,?,?,?)
    `,
    [firstName, lastName, email, password],
    (err, result) => {
      if (err) {
        res.status(400)
        throw new Error("המשתמש קיים,התחבר")
      }
      res.status(201).send("המשתמש נוצר")
    }
  )
})

app.get("/api/recipes/homepage", (req, res) => {
  db.query(
    `SELECT id,userId,title,description,views,createdAt,isPrivate FROM recipes`,
    (err, result) => {
      if (err) throw err
      res.json(result)
    }
  )
})

app.get("/api/recipes/gallery", (req, res) => {
  db.query(`SELECT id,userId,title FROM recipes`, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

app.get("/api/recipes/:category", (req, res) => {
  console.log(req.body)
  // db.query(
  //   `SELECT id,userId,title,description,views,createdAt,isPrivate FROM recipes`,
  //   (err, result) => {
  //     if (err) throw err
  //     res.json(result)
  //   }
  // )
})

app.get("/api/categories", (req, res) => {
  db.query(`SELECT * FROM categories`, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

app.get("/api/measuring-units", (req, res) => {
  db.query(`SELECT * FROM measuring_units`, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

app.get("/api/ingredients", (req, res) => {
  db.query(`SELECT * FROM ingredients`, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// app.get("/api/recipes:id", (req, res) => {
//   const {id} = req.body

//   db.query(
//     `SELECT id,userId,title,description,views,createdAt,isPrivate FROM recipes`,
//     (err, result) => {
//       if (err) throw err
//       res.json(result)
//     }
//   )
// })

app.listen(3001, () => {
  console.log("App listening on port 3001!".yellow.bold)
})
