import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SashimiIndexCard(props) {
    // console.log(props)
    return (
        <div>
            <Link to={`/sashimi/${props.sashimi.id}`}>
                <Image className="sashimi-index-image" src={props.sashimi.image} alt={props.sashimi.name} thumbnail/>
            </Link>
            <Link to={`/sashimi/${props.sashimi.id}`}>
                <h4>{props.sashimi.name}   |    ${props.sashimi.price}</h4>
            </Link>
        </div>
    )
}
