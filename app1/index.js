const express = require('express')
const app = express()
const port = app.get('port')

app.get('/', (req, res) => {
  res.send('App1')
})

app.listen(port, () => {
  console.log(`Example app 1 listening on port ${port}`)
})