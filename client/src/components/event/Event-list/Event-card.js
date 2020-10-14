import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const EventCard = props => {

    return (
        <>

            <Row className="event-detail-card text-center">
                <Col className="event-detail-img" lg={3}>
                    <Link to={`/events/${props.elm._id}`}>
                        <img src={props.elm.imageEvent} alt={props.elm._id} />
                    </Link>
                </Col>

                <Col lg={5}>
                    <Link to={`/events/${props.elm._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <h5>{props.elm.title}</h5>
                        <p>{props.elm.brief}</p>
                    </Link>
                {props.loggedInUser && props.loggedInUser._id === props.elm.owner._id && <Button className="edit-btn" onClick={() => props.handleModal(true, props.elm)} variant="dark" size="sm">Edit</Button>}
                {props.loggedInUser && props.loggedInUser._id === props.elm.owner._id && <Button className="delete-btn" onClick={() => props.handleDelete(props.elm._id)} variant="dark" size="sm" style={{ marginLeft: '30px' }}>Delete</Button>}
                </Col>

                <Col clasName="text-center" lg={4}>
                    <Link to={`/events/${props.elm._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <p>Owner: {props.elm.owner.username}</p>
                        <p>Genre: {props.elm.genre}</p>
                        <p>Location: {props.elm.loc.city}</p>
                        <p>Event Date: {new Date(props.elm.eventDate).toLocaleDateString()}</p>
                    </Link>
                </Col>
            </Row>

        </>
    )
}

export default EventCard