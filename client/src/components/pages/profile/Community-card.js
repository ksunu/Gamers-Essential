import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ProfileService from '../../../service/ProfileService'
import './Profile.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class CommunityCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.profileService = new ProfileService()
    }

    handleDeleteFav = () => {

        this.profileService
            .deleteFavCommunity(this.props.elm._id, this.props.loggedInUser)
            .then(response => console.log(response))
        this.props.updateCommunityList()
    }


    render() {
        return (
            <>
                <Card style={{ width: '18rem' }} className="community-card">
                    <Link to={`/community/${this.props.elm._id}`}>
                        <Card.Img variant="top" src={this.props.elm.imageProd} />
                        <Col>
                            <Card.Body>
                                <Card.Title>{this.props.elm.title}</Card.Title>
                                <Card.Text>
                                    <p>brief: {this.props.elm.brief}</p>
                                    <p>Description: {this.props.elm.description}</p>
                                </Card.Text>
                                <ul className="community-card-text">
                                    <li>Genre: {this.props.elm.genre}</li>
                                    <li>Owner: {this.props.elm.owner.username}</li>
                                </ul>
                            </Card.Body>
                        </Col>
                    </Link>
                    <div className="community-card-btn">
                        <Row>
                            <Col>
                                {this.props.loggedInUser._id == this.props.elm.owner._id && <Link className="community-edit" onClick={() => this.props.handleModal(true, this.props.elm)}><img src="https://image.flaticon.com/icons/svg/715/715750.svg" alt="" /></Link>}

                            </Col>
                            <Col>
                                {this.props.loggedInUser._id == this.props.elm.owner._id && <Link className="community-delete" onClick={() => this.props.handleDelete(this.props.elm._id)}><img src="https://image.flaticon.com/icons/svg/1345/1345874.svg" alt="" /></Link>}

                            </Col>

                        </Row>
                        <Button onClick={this.handleDeleteFav}>Remove from favourites</Button>
                    </div>
                </Card>

                {/* <Col md={2}>
                    <div className="fav-community">
                        <img src={this.props.elm.imageProd} alt={this.props.elm.title} />
                        <p>{this.props.owner}</p>
                        <p>{this.props.elm.title}</p>
                        <p>{this.props.elm.genre}</p>
                        <p>{this.props.elm.brief}</p>
                        <p>{this.props.elm.description}</p>
                        <p>{this.props.elm.comments}</p>
                        <Button onClick={this.handleDeleteFav}>Remove from favourites</Button>
                    </div>
                </Col> */}
            </>
        )
    }
}

export default CommunityCard