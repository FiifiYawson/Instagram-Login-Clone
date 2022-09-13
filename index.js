const express = require('express')
const file = require('./app.json')
const fs = require('fs')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.listen(5000, () => {
    console.log('server started')
})

app.post('/api', (req, res) => {
    let user = {
        name: req.body.name,
        password: req.body.password
    }

    file.push(user)

    fs.writeFile('C:\\Users\\ASUS\\Desktop\\CODE\\Instagram\\app.json', JSON.stringify(file), (err) => {
        if (err) throw err
    })

})