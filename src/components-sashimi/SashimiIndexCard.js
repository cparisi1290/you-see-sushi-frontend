import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SashimiIndexCard(props) {
    // console.log(props)
    return (
        <div key={props.sashimi.id} className='sashimi-index-card'>
            <div className="sashimi-index-image">
                <Link to={`/sashimi/${props.sashimi.id}`}>
                    <Image  src={props.sashimi.image} alt={props.sashimi.name} thumbnail/>
                </Link>
            </div>
            <div className="sashimi-name">
                <Link className='sashimi-links' to={`/sashimi/${props.sashimi.id}`}>
                    <h4>{props.sashimi.name}</h4>
                </Link>
                    
                
            </div>
            <div className="sashimi-price">
                <span>${props.sashimi.price}</span>
                
            </div>
            <div className="sashimi-index-order-button">
            <Button variant="success">Add to Order</Button>
            </div>
        </div>
    )
}
