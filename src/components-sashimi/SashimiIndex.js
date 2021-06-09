import React from 'react'
import SashimiIndexCard from './SashimiIndexCard'
// import { Container, Row, Col } from 'react-bootstrap';

export default function SashimiIndex(props) {
    // console.log(props)
    const sashimi = props.sashimi.map(sashimi => <div key={sashimi.id}><SashimiIndexCard sashimi={sashimi}/></div>)
    return (sashimi)
}
