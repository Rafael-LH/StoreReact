const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

// Config express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.set('port', port)

// router
// const router = require('./network/routes')
// router(app)

// connection app
app.listen(app.get('port'), () => {
  console.log(`La applicacion esta escuchando en http://localhost${port}`);
})
