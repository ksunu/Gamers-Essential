import React, { Component } from "react"
import GameService from "../../../service/GameService"
import GameCard from "./Game-card"
import SearchForm from "./Search-form"
import "./Game-list.css"

// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

class GameList extends Component {
  constructor() {
    super()
    this.state = {
      games: undefined,
      count: 1,
      searchInput: "",
      searchResults: ""
    }
    this.GameService = new GameService()
  }

  componentDidMount = () => this.updateGameList()

  updateGameList = () => {
    this.handleGameList()

  }

  handleGameList = () => {
    this.GameService.getAllGames(this.state.count)
      .then((response) => this.setState({ games: response.data.results }))
      .catch((err) => console.log(err))
  }


  handleNextPage = () => {

    this.setState({ count: ++this.state.count })
    this.updateGameList()
  }

  handlePreviousPage = () => {
    // TO-DO count <= 0 and page.length
    this.setState({ count: --this.state.count })
    this.updateGameList()
  }


  handleForm = input => {

    this.setState({ searchInput: input })
    this.state.searchInput && this.GameService.searchGames(this.state.searchInput)
      .then(response => this.setState({ searchResults: response.data.results }))
    
  }

  render() {
    return (
      <>
        <Button onClick={this.handlePreviousPage} className="left">&lt;</Button>
        <Button onClick={this.handleNextPage} className="right">&#62;</Button>
        <Container>
          <h1>Games</h1>

          {this.state.searchResults && this.state.searchResults.map((elm) => (
            <GameCard key={elm.id} {...elm} />))}


          <SearchForm handleForm={input => this.handleForm(input)} />
          <p className="page-count">Page: {this.state.count} </p>
          <Row>
            {this.state.games && this.state.games.map((elm) => (
              <GameCard key={elm.id} {...elm} />
            ))}
          </Row>
        </Container>
      </>
    )
  }
}

export default GameList
