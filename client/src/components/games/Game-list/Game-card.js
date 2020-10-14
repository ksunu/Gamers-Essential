import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS
import Col from 'react-bootstrap/Col'

import Skeleton from 'react-loading-skeleton'
// import Skeleton from 'react-skeleton-loader'


import './Game-list.css'

const GameCard = ({ id, name, background_image, rating }) => {

    return (
        <>
            <Col md={3} sm={4} xs={5}>
                <div className="game-card">
                    <Link to={`/games/${id}`} style={{ textDecoration: 'none' }}>
                    <img src={background_image || <Skeleton height={200} />} alt={name} />

                    <p>{name || <Skeleton />}</p>
                    </Link>
                </div>
                </Col>
        </>

    )

}

export default GameCard