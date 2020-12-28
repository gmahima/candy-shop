import express from 'express'
import serverRenderer from './middleware/renderer'

const PORT = 3006
const path = require('path')
const app = express()
const router = express.Router()
router.use('^/$', serverRenderer)
router.use(express.static(path.resolve(__dirname, '..', 'build'), {maxAge: '30d'})) //maxAge: http caching age

app.use(router)
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
