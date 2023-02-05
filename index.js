const express = require('express');
const router = require('./src_knex/routes/router.js')

const app = express()
app.use(express.json())
app.use(router)

app.listen(8080, () => {
    console.log(`http://localhost:8080`)
})