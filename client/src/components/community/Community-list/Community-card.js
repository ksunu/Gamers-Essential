import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const CommunityCard = props => {
    return (
        <>


            <div className="community-card">
                <Row>
                    <Link to={`/community/${props.elm._id}`}>
                        <img src={props.elm.imageProd} alt={props.elm._id} />
                    </Link>
                </Row>
                <Row>
                    <Link to={`/community/${props.elm._id}`} style={{ textDecoration: 'none' }}>
                        <div className="community-card-body">
                            <h3>{props.elm.title}</h3>

                            <p>{props.elm.brief}</p>

                            <ul className="community-card-text">
                                <li>Genre: {props.elm.genre}</li>
                                <li>Owner: {props.elm.owner.username}</li>
                            </ul>
                        </div>
                    </Link>
                </Row>
                <Row className="text-center">
                    <Col>
                        {props.loggedInUser._id == props.elm.owner._id && <Button variant="dark" size="sm" className="community-edit" onClick={() => props.handleModal(true, props.elm)}>Edit</Button>}

                    </Col>
                    <Col>
                        {props.loggedInUser._id == props.elm.owner._id && <Button variant="dark" size="sm" className="community-delete" onClick={() => props.handleDelete(props.elm._id)}>Delete</Button>}

                    </Col>

                </Row>

            </div>


        </>
    )

}

export default CommunityCard