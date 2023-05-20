const express = require('express')
const path = require('path')
const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
    return res.render('index.ejs')
})


app.listen(3000, () => {
    console.log('Server is running at `http://localhost:3000`')
})