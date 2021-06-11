// ASYNC ACTION CREATORS

import SushiIndexCard from "../components-sushi/SushiIndexCard"

export const fetchSushi = () => {
    return(dispatch) =>{
        console.log('success')
        fetch('http://localhost:3001/api/v1/sushi_rolls')
        .then(resp => resp.json())
        .then(sushi => {
            // console.log(sushi)
            if (sushi.error) {
                alert(sushi.error)
            } else {
                dispatch({type: 'FETCH_SUSHI', payload: sushi})
            }
        })
    }
}

