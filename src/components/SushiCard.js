import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap';

const SushiCard = (props) => {
    return (

            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <div key={props.sushi.id}>
                            <Image className="sushi-index-image" src={props.sushi.image} alt={props.sushi.name} thumbnail/>                        </div>
                            <Link to={`{/sushi/${props.sushi.id}`}><h4>{props.sushi.name}</h4></Link>
                    </Col>
                </Row>
            </Container>
 
    )
}

export default SushiCard