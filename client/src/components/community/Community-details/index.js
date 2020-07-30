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
            .then(this.props.handleToast(true, 'Added to favourites'))
            .catch(err => console.log(err))
    }

    handleDeleteFav = () => {

        this.profileService
            .deleteFavCommunity(this.props.match.params.id, this.props.loggedInUser)
            .then(response => console.log(response))
            .then(this.props.handleToast(true, 'Removed from favourites'))
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
                <Container as="span">
                    <Link style={{ textDecoration: 'none' }} to='/community'><Button variant="dark" className="btn-default">&#10229;</Button></Link>
                      
                    <Row className="justify-content-end" style={{paddingRight: 50}}>
                            {this.props.loggedInUser && <Button variant="dark" className="fav-btn-add" onClick={this.handleFav}>Add to Favourites</Button>}
                            {this.props.loggedInUser && <Button variant="dark" className="fav-btn-remove" onClick={this.handleDeleteFav}>Delete from Favourites</Button>}
                    </Row>

                    <div className="">
                        <div className="text-center">
                            <h1 style={{ marginTop: 20 }}>{this.state.communityDetails.title}</h1>
                        </div>

                        <Row style={{marginTop: 40, marginBottom:0}} className="justify-content-center">
                            <Col md={4}>
                                <img src={this.state.communityDetails.imageProd} alt={this.state.communityDetails.title} className="community-img" />

                            </Col>
                            <Col className="my-auto" md={6}>
                                <p><b>Genre:</b> {this.state.communityDetails.genre}</p>
                                <p><b>Description:</b> {this.state.communityDetails.description}</p>
                            </Col>

                        </Row>

                        <hr></hr>
                        <Row className="box-row">

                            <Col md={12}>
                                <div className="box box1">
                                    <Link style={{ textDecoration: 'none', color: 'white', fontSize: 30, marginTop: 30 }} onClick={() => this.handleModal(true)}> <b className="oddboxinner">Insert comments</b></Link>
                                    {this.props.loggedInUser && <Link style={{ textDecoration: 'none', color: 'white', fontSize: 30, marginTop: 30 }} onClick={this.handleDeleteComment}> <b className="oddboxinner2">Delete comment</b></Link>}
                                    <table className="table-comments">

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
                                </div>


                            </Col>

                        </Row>
                     <br></br>
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