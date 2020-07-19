import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link, NavLink } from 'react-router-dom'


class Navigation extends Component {
    // TO-DO: constructor() {
    //     super()
    // }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
                <Navbar.Brand>
                    <Link to="/">GamersEssential</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <NavLink to="/" exact activeStyle={{ color: 'white' }}>Main</NavLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLink to="/community" activeStyle={{ color: 'white' }}>Community</NavLink>
                        </Nav.Link>

                        {/* TO-DO: {this.props.loggedInUser ?
                            (
                                <Nav.Link as="span">
                                    <span onClick={this.logout}>Cerrar sesión</span>
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as="span">
                                        <NavLink to="/signup" activeStyle={{ color: 'white' }}>Registro</NavLink>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <NavLink to="/login" activeStyle={{ color: 'white' }}>Inicio sesión</NavLink>
                                    </Nav.Link>
                                </>
                            )
                        } */}

                        {/* <Nav.Link as="span">
                            <NavLink to="/profile" activeStyle={{ color: 'white' }}>Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</NavLink>
                        </Nav.Link> */}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation