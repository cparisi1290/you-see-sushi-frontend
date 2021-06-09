import React from 'react'
import { Image } from 'react-bootstrap'

const SushiShow = (props) => {
    
    const sushi = props.sushi.find(sushi => {
        return sushi.id === parseInt(props.match.params.id)
    })

    return (
        <div>
            <Image src={sushi.image} alt={sushi.name}></Image>
            <h3>{sushi.name}    |    ${sushi.price}</h3>
            <p>{sushi.description}</p>
        </div>
    )
}

export default SushiShow;