import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const CommunityCard = props => {
    return (
        <>
            <section>
                <div className="community-card">
                    <Col md={4}>
                        <Link to={`/community/${props.elm._id}`}>
                            <img src={props.elm.imageProd} alt="{props.elm.title}" />
                            <article>
                                <Card.Title>{props.elm.title}</Card.Title>
                            </article>
                            <article>

                                <Card.Text> {props.elm.brief} </Card.Text>
                            </article>
                        </Link>
                        {props.loggedInUser._id == props.elm.owner._id && <Button className="btn btn-dark btn-block btn-sm" onClick={() => props.handleModal(true, props.elm)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Edit</Button>}
                        {props.loggedInUser._id == props.elm.owner._id && <Button className="btn btn-dark btn-block btn-sm" onClick={() => props.handleDelete(props.elm._id)}>Delete</Button>}
                    </Col>
                </div>
            </section>
        </>
    )

}

export default CommunityCard