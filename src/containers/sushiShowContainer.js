import React from 'react'
import { connect } from 'react-redux'
import SushiShow from '../components/SushiShow'

const suhsiShowContainer = (props) => {
    return (
        <div>
            <SushiShow sushi={props.sushi}/>
        </div>
    )
}

const mstp = state => {
    console.log(state)
    return {
        sushi: state.sushiReducer.sushi
    }
}

export default connect(mstp)(suhsiShowContainer)
