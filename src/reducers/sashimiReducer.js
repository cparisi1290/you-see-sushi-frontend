const sashimiReducer = (state = {sashimi: [], loading: false}, action) => {
    switch(action.type) {
        case 'FETCH_SASHIMI':
            // console.log(action)
            return {...state, sashimi: action.payload, loading: false}
        case 'LOADING':
            return {...state, loading: true}
        default:
            return state
    }
}

export default sashimiReducer;