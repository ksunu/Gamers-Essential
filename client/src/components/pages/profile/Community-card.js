import React from 'react'
import Col from 'react-bootstrap/Col'
import './Profile.css'


const CommunityCard = ({ brief, title, description, genre, imageProd, comments, owner }) => {

    return (
        <>
            <Col md={4}>
                <div className="fav-community">
                    <img src={imageProd} alt={title} />
                    <p>{owner}</p>
                    <p>{title}</p>
                    <p>{genre}</p>
                    <p>{brief}</p>
                    <p>{description}</p>
                    <p>{comments}</p>

                </div>
            </Col>
        </>
    )
}




export default CommunityCard