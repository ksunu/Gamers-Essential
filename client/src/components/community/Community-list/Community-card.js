import React from 'react'
import { Link } from 'react-router-dom'

// BOOTSTRAP COMPONENTS

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'


const CommunityCard = props => {
    return (
        <>
            {/* <section className="card">

                <article>
                    <img src={props.elm.imageProd} alt={props.elm.title} />

                </article>
                <article>
                    <div className="card-text"></div>
                    <h2>{props.elm.title}</h2>
                    <p>{props.elm.brief}</p>

                </article>
                <article>
                    <div className="card-stats">
                        <div className="stat">
                            <div className="value">{props.elm.genre}</div>
                            <div className="type ">Genre</div>
                        </div>
                        <div className="stat">
                            <div className="value">{props.elm.owner.username}</div>
                            <div className="type ">User</div>
                        </div>
                    </div>

                </article>
        </section> */}

            <Row>

                <Card style={{ width: '18rem' }} className="community-card">
                    <Link to={`/community/${props.elm._id}`}>
                            <Card.Img variant="top" src={props.elm.imageProd} />
                        <Col>
                            <Card.Body>
                                <Card.Title>{props.elm.title}</Card.Title>
                                <Card.Text>
                                    {props.elm.brief}
                                </Card.Text>
                                <ul className="community-card-text">
                                    <li>Genre: {props.elm.genre}</li>
                                    <li>Owner: {props.elm.owner.username}</li>
                                </ul>
                            </Card.Body>
                        </Col>
                    </Link>
                    <div className="community-card-btn">
                        <Row>
                            <Col>
                                {props.loggedInUser._id == props.elm.owner._id && <Link className="community-edit" onClick={() => props.handleModal(true, props.elm)}><img src="https://image.flaticon.com/icons/svg/715/715750.svg" alt="" /></Link>}

                            </Col>
                            <Col>
                                {props.loggedInUser._id == props.elm.owner._id && <Link className="community-delete" onClick={() => props.handleDelete(props.elm._id)}><img src="https://image.flaticon.com/icons/svg/1345/1345874.svg" alt="" /></Link>}

                            </Col>
                        </Row>
                    </div>
                </Card>
            </Row>


            {/* <section>
        <div className="community-card">
            <Col md={4}>
                <Link to={`/community/${props.elm._id}`}>
                    <img src={props.elm.imageProd} alt={props.elm.title} />
                    <article className="community-text">
                        <Card.Title>{props.elm.title}</Card.Title>
                    </article>
                    <article>

                        <Card.Text> {props.elm.brief} </Card.Text>
                    </article>
                    <article className="community-stats">

                    </article>
                </Link>
                {props.loggedInUser._id == props.elm.owner._id && <Button className="btn btn-dark btn-block btn-sm" onClick={() => props.handleModal(true, props.elm)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Edit</Button>}
                {props.loggedInUser._id == props.elm.owner._id && <Button className="btn btn-dark btn-block btn-sm" onClick={() => props.handleDelete(props.elm._id)}>Delete</Button>}
            </Col>
        </div>
    </section> */}
        </>
    )

}

export default CommunityCard