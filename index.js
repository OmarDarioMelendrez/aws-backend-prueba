const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Sigue vivo pero ahora en el 3000 PAH')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})