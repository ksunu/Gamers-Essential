import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CommunityService from '../../../service/CommunityService'
import ProfileService from '../../../service/ProfileService'
import CommentForm from './Comment-form'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import './Community-details.css'


class CommunityDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            communityDetails: "",
            showModal: false
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

    handleModal = (status) => {

        this.setState({ showModal: status })

    }




    render() {

        return (
            <>
                <Link style={{ textDecoration: 'none' }} to='/community'><Button className="btn-default">&#10229;</Button></Link>
                <Container as="span">

                    <div className="community-details-page">

                        <Row>

                            {this.props.loggedInUser && <Button className="btn btn-dark btn-md" onClick={this.handleFav}>Add to Favourites</Button>}
                            {this.props.loggedInUser && <Button className="btn btn-dark btn-md" onClick={this.handleDeleteFav}>Delete from Favourites</Button>}

                        </Row>

                        <Row className="justify-content-center">
                            <img src={this.state.communityDetails.imageProd} alt={this.state.communityDetails.title} className="community-img" />

                        </Row>

                        <h1>{this.state.communityDetails.title}</h1>

                        <p><b>Description:</b> {this.state.communityDetails.description}</p>

                        <p><b>Genre:</b> {this.state.communityDetails.genre}</p>



                        <hr></hr>
                        <Row>
                            <Col md={5}>
                                <Button className="btn btn-dark btn-md" onClick={() => this.handleModal(true)}>Insert Comment</Button>
                                {this.props.loggedInUser && <Button className="btn btn-dark btn-md" onClick={this.handleDeleteComment}>Delete comment</Button>}
                            </Col>
                            <Col md={6}>
                                <Table striped bordered variant="dark" className="comments-table">
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
                                </Table>
                            </Col>

                        </Row>
                    </div>
                    <Modal dialogClassName="modal-window" size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                        <Modal.Body className="modal-page">
                            <CommentForm id={this.props.match.params.id} handleCommunitySubmit={this.handleCommunitySubmit} handleModal={() => this.handleModal()} />
                        </Modal.Body>
                    </Modal>

                </Container>
            </>
        )
    }
}

export default CommunityDetails