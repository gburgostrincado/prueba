const express = require('express')
const bodyParser = require('body-parser')
const { getPots, createPost, deletePost } = require('./queries')
const cors = require('cors')

const app = express()
const port = 4000

app.use(cors())

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({ extended: true })
)

app.get('/posts', (req, res) => getPots(req, res))
app.post('/posts/new', (req, res) => createPost(req, res))
app.delete('/posts/delete/:id', (req, res) => deletePost(req, res))


app.listen(port, () => {
    console.log(`App is running in port: ${port}`);
})