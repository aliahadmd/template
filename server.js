const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
const authRoute = require('./routes/authRoute')

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')))
app.use('/', authRoute)
// fs.readFileSync()

app.get('/', (req, res) => {
    return res.render('index.ejs')
})
app.get('/register', (req, res) => {
    return res.render('dashboard/register.ejs')
})


app.listen(3000, () => {
    console.log('Server is running at `http://localhost:3000`')
})