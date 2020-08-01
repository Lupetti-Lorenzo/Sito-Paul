import { SET_FILTER, SET_SORTING } from "../actions/types"

const initialState = {
    sortProducts: null,
    filterProducts: "All"
}

const setFilters = (state = initialState, action) => {
    if(action.type === SET_SORTING){
        return {
            ...state,
            sortProducts: action.payload
        }
    }
    else if(action.type === SET_FILTER) {
        return {
            ...state,
            filterProducts: action.payload
        }
    }
    else return state
}

export default setFilters