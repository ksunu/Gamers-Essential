import React from 'react'
import Col from 'react-bootstrap/Col'

const EventCard = ({ title, genre, description, brief, imageEvent, comments, owner, eventDate, locationName }) => {

        return (
            <>
                
                <Col md={4}>        
                <p>{brief}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{genre}</p>
                <img src={imageEvent} alt={title} />
                <p>{comments}</p>
                <p>{owner}</p>
                <p>{eventDate}</p>
                <p>{locationName}</p>
                </Col>

            </>
        )
}




export default EventCard