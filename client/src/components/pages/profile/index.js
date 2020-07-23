import React, { Component } from 'react'
import ProfileService from '../../../service/ProfileService'
import GamesService from '../../../service/GameService'

// BOOTSTRAP COMPONENTS
import CommunityCard from './Community-card'
import EventCard from './Event-card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
    
    
class Profile extends Component {
    constructor (){
        super ()
        this.state = {
            allProfile: undefined,
            gameDetails: undefined
        }

        this.profileService = new ProfileService()
        this.gameService = new GamesService()
    }

    componentDidMount = () => {
        
        this.updateCommunityList()
        this.updateFavGames()

    }

    updateCommunityList = () => {

        this.profileService
            .getAllProfile(this.props.loggedInUser._id)
            .then(response => this.setState({ allProfile: response.data }))
            .catch(err => console.log(err))
    }

    updateFavGames = () => {
       
        this.gameService
            .getOneGame(this.props.loggedInUser.favGame[0])
            //  .then(response => console.log(response.data))
            .then(response => this.setState({ gameDetails: response }))
            
            .catch(err => console.log(err))
   }
  
   
   
   render() {
        
      
       
       return (
           <>
                
               

                <Container>
                <h1>Your profile</h1>
            
                 {/* {const Profile = props => props.loggedInUser && <h1>¡Hi, {props.loggedInUser.username}!</h1>} */}

                    <h2>Favourite Community</h2>
                    <Row>
                    {this.state.allProfile && this.state.allProfile.favCommunity.map(elm => <CommunityCard {...elm} />)}
                    </Row>
                <hr></hr>
                    <h2>Favourite Events</h2>
                    <Row>
                    {this.state.allProfile && this.state.allProfile.favEvent.map(elm => <EventCard {...elm} />)}
                    </Row>

                    <h2>Favourite Games</h2>
                    <p>TO-DO</p>


                </Container>
                    
            </>
        )
    }
}

export default Profile
