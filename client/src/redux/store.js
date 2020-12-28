import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Candies from './reducers/Candies'
const store = createStore(combineReducers({
    candies: Candies
}), applyMiddleware(thunk))

export default store