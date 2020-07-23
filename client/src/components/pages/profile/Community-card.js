import React  from 'react'
import Col from 'react-bootstrap/Col'


const CommunityCard = ({brief, title, description, genre, imageProd, comments, owner}) => {

        return (
            <>
                <Col>
                <p>{brief}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{genre}</p>
                <img src={imageProd} alt={title} />
                <p>{comments}</p>
                <p>{owner}</p>
                </Col>
            </>
        )
}




export default CommunityCard