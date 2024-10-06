const express = require('express')
const shell = require('shelljs')
const app = express()
const port = 3030

app.get('/', (req, res) => {
    shell.exec("sh test.sh")
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
