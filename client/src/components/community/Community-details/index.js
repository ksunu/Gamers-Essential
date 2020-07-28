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

    handleDeleteComment = () => {

        this.communityService
            .deleteComment(this.props.match.params.id)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        this.updateCommunityList()
    }



    render() {

        return (
            <>
                <Link className="btn btn-dark btn-md" to='/community'>Back</Link>
                <Container as="span">

                    <div className="community-details-page">

                        <Row>
                            <Col md={2}>
                                {this.props.loggedInUser && <Button onClick={this.handleDeleteComment}>Delete comment</Button>}

                                {this.props.loggedInUser && <Button onClick={this.handleFav}>Add to Favourites</Button>}
                                {this.props.loggedInUser && <Button onClick={this.handleDeleteFav}>Delete from Favourites</Button>}

                            </Col>
                            <Col md={5}>
                                <img src={this.state.communityDetails.imageProd} alt={this.state.communityDetails.title} className="community-img" />
                            </Col>
                            <Col md={5}>
                                <h1>{this.state.communityDetails.title}</h1>
                                <p><b>User:</b> {this.state.communityDetails.owner}</p>

                                <p><b>Description:</b> {this.state.communityDetails.description}</p>

                                <p><b>Genre:</b> {this.state.communityDetails.genre}</p>
                            </Col>

                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <CommentForm id={this.props.match.params.id} handleCommunitySubmit={this.handleCommunitySubmit} />
                            </Col>
                            <Col>
                                <table className="comments-table">
                                    <thead>
                                        <th>User</th>
                                        <th>Comments</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {this.state.communityDetails && this.state.communityDetails.commentsUser.map(elm => <p>{elm}:</p>)}
                                            </td>
                                            <td>
                                                {this.state.communityDetails && this.state.communityDetails.comments.map(elm => <p>{elm}</p>)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>

                        </Row>
                    </div>

                </Container>
            </>
        )
    }
}

export default CommunityDetails