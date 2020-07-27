import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const EventCard = props => {

    return (
        <>
                <Col className="event-detail-img" md={3}>
                    <Link to={`/events/${props.elm._id}`}>
                        <img src={props.elm.imageEvent} alt="" />
                    </Link>
                </Col>
                <Col className="event-detail-content" md={2}>
                    <Link to={`/events/${props.elm._id}`}>
                        <h5>{props.elm.title}</h5>
                        <p>{props.elm.genre}</p>
                    </Link>
            </Col>
            <Col md={1}>
                {props.loggedInUser._id == props.elm.owner && <Button className="btn btn-dark btn-block btn-sm" onClick={() => props.handleModal(true, props.elm)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Edit</Button>}
                        {props.loggedInUser._id == props.elm.owner && <Button className="btn btn-dark btn-block btn-sm" onClick={() => props.handleDelete(props.elm._id)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Delete</Button>}
            </Col>

        </>
    )
}

export default EventCard