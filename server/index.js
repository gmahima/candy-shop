import path from 'path'
import fs from 'fs'
import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'
var { BUILD_DIR, PUBLIC_DIR } = require('./paths');

const PORT = process.env.port || 3006;
const app = express()



app.get('/', (req,res) => {
    // const app = ReactDOMServer.renderToString(<App />)
    // const indexFile = path.resolve('./build/index.html')
    // console.log(indexFile)
    // fs.readFile(indexFile, 'utf8', (err, data) => {
    //     if(err) {
    //         console.error('Something went wrong:', err);
    //         return res.status(500).send('Oops, better luck next time!');
    //     }
    //     return res.send(
    //         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    //     )
    // })
    app.use(express.static(BUILD_DIR));
    app.use(express.static(PUBLIC_DIR));
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`)
    })
})
