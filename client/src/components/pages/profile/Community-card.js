import React, { Component } from 'react'
import './Profile.css'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ProfileService from '../../../service/ProfileService'

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
                <Col md={4}>
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
                </Col>
            </>
        )
    }
}

export default CommunityCard