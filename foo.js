const express = require('express')

const app = express()

const login = (req, res, next) => {
  if (true) {
    res.end('NOT LOGGIN')
  } else {
	  next()
  }
}
const fn2 = (req, res) => res.end('OK')

app.get('/', login, fn2)

app.listen(3000, () => console.log('liiiistening'))
