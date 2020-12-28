import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../../src/App'
import storeConfig from '../../src/redux/storeConfig'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
const path = require('path')
const fs = require('fs')

export default (req, res, next) => {
    const store = createStore(storeConfig.store, applyMiddleware(storeConfig.middleware))
    const preloadedState = store.getState()
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html')
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if(err) {
            console.error('err', err);
            return res.status(404).end()
        }
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        )
        return res.send(htmlData.replace(`<div id="root"></div>`, `
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        
        `))
    })
}