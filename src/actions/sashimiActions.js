export const fetchSashimi = () => {
    return (dispatch) => {
        // console.log('in sashimi action')
        fetch('http://localhost:3001/api/v1/sashimis')
        .then(resp => resp.json())
        .then(sashimi => {
            dispatch({
                type: 'FETCH_SASHIMI', payload: sashimi
            })
        })
    }
}