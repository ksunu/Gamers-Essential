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
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <div className="links">
                                <NavLink to="/" exact activeStyle={{ color: 'white' }}>/</NavLink>
                            </div>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <div className="links">
                                <NavLink to="/games" activeStyle={{ color: 'white' }}>Games</NavLink>
                            </div>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <div className="links">
                                <NavLink to="/community" activeStyle={{ color: 'white' }}>Community</NavLink>
                            </div>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <div className="links">
                                <NavLink to="/events" activeStyle={{ color: 'white' }}>Events</NavLink>
                            </div>
                        </Nav.Link>

                        {this.props.loggedInUser ?
                            (
                                <Nav.Link as="span">
                                    <div className="links">
                                        <span onClick={this.logout} className="logout">
                                            <div>
                                                <img src="../../../log.svg" alt="off" />
                                            </div>
                                        </span>
                                    </div>
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as="span">
                                        <div className="links">
                                            <NavLink to="/signup" activeStyle={{ color: 'white' }}>Signup</NavLink>
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <div className="links">
                                            <NavLink to="/login" activeStyle={{ color: 'white' }}>Login</NavLink>
                                        </div>
                                    </Nav.Link>
                                </>
                            )
                        }
                        <Nav.Link as="span">
                            <NavLink to="/profile" activeStyle={{ color: 'white' }} className="link-profile">Hi, {this.props.loggedInUser ? this.props.loggedInUser.username : 'guest'}</NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default Navigation