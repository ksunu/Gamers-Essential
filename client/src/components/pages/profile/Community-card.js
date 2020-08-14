import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProfileService from '../../../service/ProfileService'
import './Profile.css'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


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
            .then(this.props.updateCommunityList())
            .catch(err => console.log(err))
    }

    render() {

        console.log(this.props.elm)
        return (
            <>
                
                <div className="community-card">
                    <Row>
                        <Link to={`/community/${this.props.elm._id}`}>
                            <img src={this.props.elm.imageProd} alt={this.props.elm._id} />
                        </Link>
                    </Row>
                    <Row>
                        <Link to={`/community/${this.props.elm._id}`} style={{ textDecoration: 'none' }}>
                            <div className="community-card-body">
                                <h3>{this.props.elm.title}</h3>

                                <p>{this.props.elm.brief}</p>

                                    <p>Genre: {this.props.elm.genre}</p>
                            </div>
                        </Link>
                    </Row>
                    <Button className="fav-btn-remove"  variant="dark" onClick={() => this.handleDeleteFav()}>Remove</Button>
                </div>

            </>
        )
    }
}

export default CommunityCard