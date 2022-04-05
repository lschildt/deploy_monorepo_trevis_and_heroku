const express = require('express')
const config = require('config')
const app = express()
const port =  process.env.PORT || config.get('server.port')

app.get('/', (req, res) => {
  res.send('App1')
})

app.listen(port, () => {
  console.log(`Example app 1 listening on port ${port}`)
})