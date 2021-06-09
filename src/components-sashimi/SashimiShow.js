import React from 'react'
import { Image } from 'react-bootstrap'

const SashimiShow = (props) => {
    // console.log(props)
    const sashimi = props.sashimi.find(sashimi => {
        // console.log(sashimi)
        // console.log(props.match.params.id)
        // console.log(typeof props.match.params.id)
        return sashimi.id === parseInt(props.match.params.id)})


    console.log(sashimi)
    return (
        <div>
            <Image className="sashimi-show-image" src={sashimi.image} alt={sashimi.name} thumbnail/>
            <h3>{sashimi.name}</h3>
            <p>Description: {sashimi.description}</p>
            <p>Price: {sashimi.price}</p>

        </div>
    )
}

export default SashimiShow;