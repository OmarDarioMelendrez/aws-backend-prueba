const express = require('express')
const app = express()
const port = 80
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Sigue vivo')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})