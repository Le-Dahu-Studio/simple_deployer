const express = require('express')
const shell = require('shelljs')
const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.send(shell.exec("sh ~/deploy.sh"))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
