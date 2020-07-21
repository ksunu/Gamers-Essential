import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import AuthService from './../../../service/AuthService'
import './Navbar.css'

// BOOTSTRAP COMPONENT
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




class Navigation extends Component {
    constructor(props) {
        super(props)
        this.AuthService = new AuthService()
    }

    logout = () => {
        this.AuthService
            .logout()
            .then(() => {
                this.props.setTheUser(false)
                this.props.handleToast(true, 'User disconnected')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Navbar expand="lg" sticky="top" className="navbar-main">
                <Navbar.Brand>
                    <Link to="/">GamersEssential</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <NavLink to="/" exact activeStyle={{ color: 'yellow' }}>Main</NavLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLink to="/games" activeStyle={{ color: 'yellow' }}>Games</NavLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLink to="/community" activeStyle={{ color: 'yellow' }}>Community</NavLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLink to="/events" activeStyle={{ color: 'yellow' }}>Events</NavLink>
                        </Nav.Link>

                        {this.props.loggedInUser ?
                            (
                                <Nav.Link as="span">
                                    <span onClick={this.logout}>Cerrar sesión</span>
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as="span">
                                        <NavLink to="/signup" activeStyle={{ color: 'yellow' }}>Signup</NavLink>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <NavLink to="/login" activeStyle={{ color: 'yellow' }}>Login</NavLink>
                                    </Nav.Link>
                                </>
                            )
                        }

                        <Nav.Link as="span">
                            <NavLink to="/profile" activeStyle={{ color: 'white' }}>Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default Navigation