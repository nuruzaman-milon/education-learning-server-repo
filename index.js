const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/courses.json');

//home route for showing a random message to ui
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//all courses data api
app.get('/courses', (req, res) => {
  res.send(courses)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})