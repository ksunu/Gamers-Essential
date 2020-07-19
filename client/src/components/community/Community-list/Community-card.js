import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const CommunityCard = ({ _id, title, imageProd, brief }) => {

    return (
        <>

            <Col md={4}>
                <Card className="community-card">
                    <Card.Img variant="top" src={imageProd} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text> {brief} </Card.Text>
                        <Link to={`/community/${_id}`} className="btn btn-dark btn-block btn-sm">Details</Link>
                    </Card.Body>
                </Card>

            </Col>
        </>



    )

}

export default CommunityCard