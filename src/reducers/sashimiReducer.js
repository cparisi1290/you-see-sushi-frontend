const sashimiReducer = (state = {sashimi: [], filteredSashimi: [], loading: false}, action) => {
    switch(action.type) {
        case 'FETCH_SASHIMI':
            // console.log(action)
            return {...state, sashimi: action.payload, loading: false}
        case 'LOADING':
            return {...state, loading: true}
            case 'SEARCH_SASHIMI':
        return ({...state, filteredSashimi: action.payload})
        default:
            return state
    }
}

export default sashimiReducer;