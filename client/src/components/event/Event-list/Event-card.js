import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'


const EventCard = ({ _id, title, imageEvent, genre, brief }) => {

    return (
        <>

            <Col md={4}>
                <Card className="event-card">
                    <Card.Img variant="top" src={imageEvent} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text> {genre} </Card.Text>
                        <Link to={`/events/${_id}`} className="btn btn-dark btn-block btn-sm">Details</Link><br></br>
                        {/* <Button className="btn btn-dark btn-block btn-sm" onClick={() => handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Edit</Button> */}
                    </Card.Body>
                </Card>

            </Col>
        </>
    )
}

export default EventCard
