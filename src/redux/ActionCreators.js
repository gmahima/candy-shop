import * as ActionTypes from './ActionTypes'

export const addCandies = (candies) => {
    return ({
        type: ActionTypes.ADD_CANDIES,
        payload: candies
    })
}

export const loadCandies = () => (dispatch) => {
    setTimeout(() => {
        return dispatch(addCandies(['dark chocolate bar', 'white chocolate bar', 'milk chocolate bar', 'frozen fruit', 'caramel apple']))
    }, 3000)
}