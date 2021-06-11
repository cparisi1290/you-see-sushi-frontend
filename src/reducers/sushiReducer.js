const sushiReducer = (state = {sushi: [], filteredSushi: [], loading: false}, action) => {
    switch (action.type) {
        case 'FETCH_SUSHI':
            return {
                ...state, 
                sushi: action.payload, // array of objects that came back from fetch request
                loading: false}
                case 'SEARCH_SUSHI':
        return ({...state, filteredSushi: action.payload})
        case 'LOADING':
            return {...state, loading: true}
        default:
            return state
    }
}

export default sushiReducer;