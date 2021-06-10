import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'

const SashimiShow = (props) => {
    // console.log(props)
    const sashimi = props.sashimi.find(sashimi => {
        // console.log(sashimi)
        // console.log(props.match.params.id)
        // console.log(typeof props.match.params.id)
        return sashimi.id === parseInt(props.match.params.id)})


    console.log(sashimi)
    return (
        <Container className='sashimi-show-container'>
            <Row>
                <Col>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={sashimi.image} alt={sashimi.name} />
                        <Card.Body>
                            <Card.Title>{sashimi.name}</Card.Title>
                            <Card.Text>${sashimi.price}</Card.Text>
                            <Card.Text>{sashimi.description}</Card.Text>
                            <Button variant="success">Add to Order</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SashimiShow;