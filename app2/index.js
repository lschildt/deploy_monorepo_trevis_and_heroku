const express = require('express')
const app = express()
const port = app.get('port');

app.get('/', (req, res) => {
  res.send('App2')
})

app.listen(port, () => {
  console.log(`Example app 2 listening on port ${port}`)
})