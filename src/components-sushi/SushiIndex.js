import React from 'react'
import SushiIndexCard from './SushiIndexCard'


const SushiIndex = (props) => {
    // console.log(props)
    const sushiData = props.filteredSushi.length ? props.filteredSushi : props.sushi
    const sushiCard = sushiData.map(sushi => <div key={sushi.id}><SushiIndexCard sushi={sushi} addSushiToOrder={props.addSushiToOrder}/></div>)
    return sushiCard
}

export default SushiIndex;
