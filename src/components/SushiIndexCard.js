import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap';

const SushiIndexCard = (props) => {
    // console.log(props)
    return (
        <li key={props.sushi.id} className='sushi-index-li'>
            <Link to={`/sushi/${props.sushi.id}`}>
                <Image className="sushi-index-image" src={props.sushi.image} alt={props.sushi.name} thumbnail/>
            </Link>
            <Link to={`/sushi/${props.sushi.id}`}>
                <h5>{props.sushi.name}     |     ${props.sushi.price}</h5>
            </Link>
        </li>

    )
}

export default SushiIndexCard