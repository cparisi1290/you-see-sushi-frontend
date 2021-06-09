import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap' 
import Dragon from '../images/dragon.png'

export default function NavBar() {
    const link = {
        width: '100px',
        padding: '2px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'white',
      }
    return (
        <div>
            <Navbar fixed="top" variant="dark" bg="dark">
                <Navbar.Brand href="/home">
                    <img              
                        alt="dragon"
                        src={Dragon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    YouSeeSushi
                </Navbar.Brand> 
                <Navbar.Toggle/>
                <Navbar.Collapse >
                    <Nav>
                        <NavLink to="/home" exact style={link} activeStyle={{color: 'red'}}>Home</NavLink>
                        <NavLink to="/sushi" exact style={link} activeStyle={{color: 'red'}}>Sushi</NavLink>
                        <NavLink to="/sashimi" exact style={link} activeStyle={{color: 'red'}}>Sashimi</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            

        {/* // <Container>
            // <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
                // <Navbar.Brand href="/home">
        //             <img */}
        {/* //                 alt=""
        //                 src={Dragon}
        //                 width="30"
        //                 height="30"
        //                 className="d-inline-block align-top"
        //             />{' '}
        //             YouSeeSushi
        //         </Navbar.Brand> */}
        {/* //     <Link to='/home'>Home</Link>
        //     <Link to='/sushi'> Sushi </Link>
        //     <Link to='/sashimi'>Sashimi</Link>
        //     <Form inline>
        //         <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        //         <Button variant="outline-light">Search</Button>
        //     </Form>
        //     </Navbar> */}
        {/* // </Container> */}

        </div>
    )
}
