import React, { Component } from 'react';
import SushiComponent from '../components-sushi/SushiIndex';
import SushiShow from '../components-sushi/SushiShow';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import { fetchSushi } from '../actions/sushiActions'
// import { Container } from 'react-bootstrap';

export class sushiContainer extends Component {

    componentDidMount(){
        this.props.fetchSushi() // async action creator
    }
    
    render() {
        // console.log(this.props)
        return (
            <div className="sushi-index-container">
                <Switch>
                    <Route path='/sushi/:id' render={(routerProps) => <SushiShow {...routerProps} sushi={this.props.sushi}/>}/>
                    <Route path='/sushi' render={(routerProps) => <SushiComponent {...routerProps} sushi={this.props.sushi} filteredSushi={this.props.filteredSushi}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        sushi: state.sushiReducer.sushi,
        loading: state.loading,
        filteredSushi: state.sushiReducer.filteredSushi

    }
}

const mapDispatchToProps = dispatch => ({
    fetchSushi: () => dispatch(fetchSushi())
})

export default connect(mapStateToProps, mapDispatchToProps)(sushiContainer)