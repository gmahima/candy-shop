import * as ActionTypes from './ActionTypes'

export const loadCandies = () => {
    return ({
        type: ActionTypes.LOAD_CANDIES,
        payload: ['dark chocolate bar', 'white chocolate bar', 'milk chocolate bar', 'frozen fruit', 'caramel apple']
    })
}