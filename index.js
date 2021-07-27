const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Hello Aws app!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})