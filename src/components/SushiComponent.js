import React from 'react'
import SushiCard from './SushiCard'


const SushiComponent = (props) => {
    console.log(props)
    const sushiCard = props.sushi.map(sushi => <SushiCard sushi={sushi}/>)
    return sushiCard
}

export default SushiComponent;
