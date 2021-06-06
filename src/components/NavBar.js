import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to='/home'>Home |</Link>
            <Link to='/sushi'> Sushi </Link>
            <Link to='/sashimi'>| Sashimi</Link>
        </div>
    )
}
