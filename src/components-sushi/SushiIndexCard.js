import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Button } from 'react-bootstrap';

const SushiIndexCard = (props) => {
    // console.log(props)

    return (
        <div key={props.sushi.id} className='sushi-index-card'>
            <div className='text-name'>
                <Link className='sushi-links' to={`/sushi/${props.sushi.id}`}><strong>{props.sushi.name}</strong></Link>
            </div >
            <div className='text-price'>
                <strong>${props.sushi.price}</strong>
            </div>
            <div className="sushi-index-image-container">
                <Link to={`/sushi/${props.sushi.id}`}>
                    <Image className="sushi-index-image" src={props.sushi.image} alt={props.sushi.name} thumbnail />
                </Link>
            </div>
            <div>
                <Button variant="success">Add to Order</Button>
            </div>
        </div>

    )
}

export default SushiIndexCard