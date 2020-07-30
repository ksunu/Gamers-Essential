import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './bkg.jpg'
import { Switch, Route, Redirect } from 'react-router-dom'

import Games from './games'
import GameList from './games/Game-list'
import GameDetail from './games/Game-details'
import GenreList from './games/Genre-list'
import PlatformList from './games/Platform-list'
import CommunityList from './community/Community-list'
import CommunityDetail from './community/Community-details'
import EventList from './event/Event-list'
import EventDetail from './event/Event-details'
import IndexPage from './pages/index'
import AuthService from './../service/AuthService'
import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'
import ProfilePage from './pages/profile'

import Navigation from './ui/Navbar'
import Message from './ui/CustomToast'
import './App.scss'



class App extends Component {
  constructor() {
    super()
    this.state = {

      loggedInUser: null,
      toast: false
    }

    this.AuthService = new AuthService()

  }

  setTheUser = user => this.setState({ loggedInUser: user })

  fetchUser = () => {

    this.AuthService
      .isLoggedIn()
      .then(response => this.state.loggedInUser === null && this.setState({ loggedInUser: response.data }))
      .catch(err => console.log({ err }))
  }

  handleToast = (visible, text = '') => {
    let toastCopy = { ...this.state.toast }
    toastCopy = { visible, text }
    this.setState({ toast: toastCopy })
  }

  render() {

    this.fetchUser()

    return (
      <>

        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} handleToast={this.handleToast} />


        <Switch>
          <Route exact path="/" render={() => <IndexPage loggedInUser={this.state.loggedInUser} />} />

          <Route path="/profile" render={() =>
            this.state.loggedInUser ? <ProfilePage loggedInUser={this.state.loggedInUser} /> : <Redirect to='/signup' />}
          />

          <Route exact path="/community" render={() => <CommunityList loggedInUser={this.state.loggedInUser} handleToast={this.handleToast}/>} />
          <Route path="/community/:id" render={props => <CommunityDetail loggedInUser={this.state.loggedInUser} handleToast={this.handleToast} {...props} />}  />



          <Route exact path="/games" render={() => <Games loggedInUser={this.state.loggedInUser} />} />
          <Route exact path="/games/allGames" render={() => <GameList />} />
          <Route exact path="/games/genres" render={() => <GenreList />} />
          <Route exact path="/games/platforms" render={() => <PlatformList />} />
          <Route exact path="/games/:id" render={props => <GameDetail loggedInUser={this.state.loggedInUser} {...props} handleToast={this.handleToast}/>} />

          <Route exact path="/events" render={() => <EventList loggedInUser={this.state.loggedInUser} />} />
          <Route path="/events/:id" render={props => <EventDetail loggedInUser={this.state.loggedInUser} {...props} handleToast={this.handleToast} />} />

          <Route path="/signup" render={props => <SignupForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />
          <Route path="/login" render={props => <LoginForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />
        </Switch>

        <Message {...this.state.toast} handleToast={this.handleToast} />
      </>
    )
  }
}

export default App