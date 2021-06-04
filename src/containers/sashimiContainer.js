import React, { Component } from 'react';
import SashimiComponent from '../components/SashimiComponent';
import { Container, Row } from 'react-bootstrap';

export default class sashimiContainer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <SashimiComponent/>
                    </Row>
                </Container>
            </div>
        )
    }
}
