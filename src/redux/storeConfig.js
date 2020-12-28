import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Candies from './reducers/Candies'

const middleware = thunk;
const store = combineReducers({
    candies: Candies
})
export default {store, middleware}