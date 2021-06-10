import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

const SushiShow = (props) => {
    
    const sushi = props.sushi.find(sushi => {
        return sushi.id === parseInt(props.match.params.id)
    })

    return (
        <Container className='sushi-show-container'>
            <Row>
                <Col>
                    <Card style={{ width: '30rem' }} fluid sm>
                        <Card.Img variant="top" src={sushi.image} alt={sushi.name} />
                        <Card.Body>
                            <Card.Title>{sushi.name}</Card.Title>
                            <Card.Text>${sushi.price}</Card.Text>
                            <Card.Text>{sushi.description}</Card.Text>
                            <Button variant="success">Add to Order</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SushiShow;