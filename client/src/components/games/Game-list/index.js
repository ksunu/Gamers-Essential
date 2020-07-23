import React, { Component } from "react"
import GameService from "../../../service/GameService"
import GameCard from "./Game-card"
// import GenreList from "./Genre-list"
import "./Game-list.css"

// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

class GameList extends Component {
  constructor() {
    super()
    this.state = {
      games: [],
      count: 1,
      genreGames: [],
      genreCategory: "action"
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

  handleCategory = category => {


    this.setState({ genreCategory: category })
    this.updateGameList()
  }


  render() {
    return (
      <>
        <Container>
          <h1>Games</h1>
          <p>Page: {this.state.count} </p>
          <Button onClick={this.handlePreviousPage} className="left">&lt;</Button>
          <Button onClick={this.handleNextPage} className="right">&#62;</Button>
          <Row>
            {this.state.games.map((elm) => (
              <GameCard key={elm.id} {...elm} />
            ))}
          </Row>
        </Container>
      </>
    )
  }
}

export default GameList
