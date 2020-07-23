import React, { Component } from 'react'
import ProfileService from '../../../service/ProfileService'

class Profile extends Component {
    constructor (){
        super ()
        this.state = {
            allProfile: ""
        }

        this.ProfileService = new ProfileService

    }

    componentDidMount = () => this.updateCommunityList()

    updateCommunityList = () => {
        this.ProfileService
            .getAllProfile()
            .then(response => this.setState({ allProfile: response.data }))
            .catch(err => console.log(err))
    }

    // {/* {const Profile = props => props.loggedInUser && <h1>¡Hi, {props.loggedInUser.username}!</h1>} */}


    render() {
        

        console.log(this.state.allProfile)

        return (
            <>
            
             <div>
                <h3>Community Favourites</h3>

                    
                    {/* {this.state.allProfile.favCommunity.map(elm => <p>{elm.brief}</p>)} */}
                    {/* {this.state.allProfile.favCommunity.map(elm => {
                   
                        return <p>{elm.brief}</p>

                    })} */}
             </div>


            </>
        )
    }
}

export default Profile


















