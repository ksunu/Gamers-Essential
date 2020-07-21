import React, { Component } from 'react'

import CommunityService from '../../../service/CommunityService'
import CommentForm from './Comment-form'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


class CommunityDetails extends Component {
    constructor() {
        super()
        this.state = {
            communityDetails: ""
        }
        this.communityService = new CommunityService()
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
        // this.handleModal(false)
        this.updateCommunityList()
    }

    render() {

        

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
                            <p>Comments: {this.state.communityDetails.comments}</p>






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