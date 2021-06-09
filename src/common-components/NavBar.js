import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap' 
import Dragon from '../images/dragon.png'
import Register from '../images/Register.png'

export default function NavBar() {
    const link = {
        width: '100px',
        padding: '15px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'white',
      }
    return (
        <div>
            <Navbar fixed="top" variant="dark" bg="dark">
                <Navbar.Brand href="/home" >
                    <img              
                        alt="dragon"
                        src={Dragon}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="brand-name">YouSeeSushi</span>
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
                    <Nav>
                        <NavLink to="/checkout" >
                            <img src={Register} width="40" height="40" padding-right="200px"/>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            

        </div>
    )
}
