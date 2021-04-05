const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/router')

const app = express()
const port = 5000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())

routes(app)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
