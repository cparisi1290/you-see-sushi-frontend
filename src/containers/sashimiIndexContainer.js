import React, { Component } from 'react';
import SashimiShow from '../components/SashimiShow';
import SashimiIndex from '../components/SashimiIndex';
// import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchSashimi } from '../actions/sashimiActions'
import { Route, Switch } from "react-router-dom";


export class sashimiContainer extends Component {

    componentDidMount () {
        this.props.fetchSashimi()
    }

    render() {
        return (
            <div>
                <Switch>
                    Sashimi Container
                    <Route exact path='/sashimi' render={(routerProps) => <SashimiIndex {...routerProps} sashimi={this.props.sashimi}/>}/>
                    <Route path='/sashimi/:id' render={(routerProps) => <SashimiShow {...routerProps} sashimi={this.props.sashimi}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        sashimi: state.sashimiReducer.sashimi,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => ({
    fetchSashimi: () => dispatch(fetchSashimi())
})

export default connect(mapStateToProps, mapDispatchToProps)(sashimiContainer)
