import React, { Component } from 'react';
import SushiComponent from '../components/SushiComponent';
import { connect } from 'react-redux'
import { fetchSushi } from '../actions/sushiActions'
import { Container, Row } from 'react-bootstrap';

export class sushiContainer extends Component {

    componentDidMount(){
        this.props.fetchSushi() // async action creator
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <Container>
                Sushi Container
                    <Row>
                        <SushiComponent sushi={this.props.sushi}/>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        sushi: state.sushiReducer.sushi,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => ({
    fetchSushi: () => dispatch(fetchSushi())
})

export default connect(mapStateToProps, mapDispatchToProps)(sushiContainer)