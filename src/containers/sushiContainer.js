import React, { Component } from 'react';
import SushiComponent from '../components/SushiComponent';
import { Container, Row } from 'react-bootstrap';

export default class sushiContainer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <SushiComponent/>
                    </Row>
                </Container>
            </div>
        )
    }
}
