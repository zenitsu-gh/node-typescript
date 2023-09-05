import express from 'express'

const app = express()

app.use('/', (req, res) => {
    res.send('Hello')
})

app.listen(8080, console.log('Server running on port 8080'))