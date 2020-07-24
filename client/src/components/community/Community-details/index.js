import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CommunityService from '../../../service/CommunityService'
import ProfileService from '../../../service/ProfileService'
import CommentForm from './Comment-form'
import './Community-details.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class CommunityDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            communityDetails: "",
        }
        this.communityService = new CommunityService()
        this.profileService = new ProfileService()
    }

    componentDidMount = () => this.updateCommunityList()

    updateCommunityList = () => {
        const id = this.props.match.params.id
        this.communityService
            .getOneCommunity(id)
            .then(response => this.setState({ communityDetails: response.data }))
            .catch(err => console.log(err))
    }

    handleCommunitySubmit = () => {
        this.updateCommunityList()
    }


    handleFav = () => {

        this.profileService
            .addFavCommunity(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    handleDeleteFav = () => {

        this.profileService
            .deleteFavCommunity(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }



    render() {

        console.log(this.state.communityDetails)

        return (
            <>
                <Container as="main">

                    <h1>{this.state.communityDetails.title}</h1>

                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>

                            <p><b>Description:</b> {this.state.communityDetails.description}</p>
                            <hr></hr>
                            <p><b>Genre:</b> {this.state.communityDetails.genre}</p>
                            <hr></hr>
                            <p><b>Usuario:</b> {this.state.communityDetails.owner}</p>
                            <hr></hr>
                            <p>Comments: {this.state.communityDetails && this.state.communityDetails.comments.map(elm => <p>"{elm}"</p>)}</p>

                            {this.props.loggedInUser && <Button onClick={this.handleFav}>Add to Favourites</Button>}
                            {this.props.loggedInUser && <Button onClick={this.handleDeleteFav}>Delete from Favourites</Button>}

                                <hr></hr>
                                <Link className="btn btn-dark btn-md" to='/community'>Back</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.communityDetails.imageProd} alt={this.state.communityDetails.title} />
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <CommentForm id={this.props.match.params.id} handleCommunitySubmit={this.handleCommunitySubmit} />
                    </Row>

                </Container>
            </>
        )
    }
}

export default CommunityDetails