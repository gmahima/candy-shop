import * as ActionTypes from '../ActionTypes'

export default function Candies (state={
    isLoading: true,
    errmes: null,
    candies: []
}, action) {
    switch(action.type) {
        case ActionTypes.ADD_CANDIES: 
         return {...state, candies: action.payload, isLoading: false, errmes: null}
        default: return state;
    }
}