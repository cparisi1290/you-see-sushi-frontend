import React from 'react'
import SushiIndexCard from './SushiIndexCard'


const SushiIndex = (props) => {
    // console.log(props)
    const sushiCard = props.sushi.map(sushi => <div key={sushi.id}><SushiIndexCard sushi={sushi}/></div>)
    return sushiCard
}

export default SushiIndex;
