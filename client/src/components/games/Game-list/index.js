import React, { Component } from "react"
import { Link } from "react-router-dom"
import GameService from "../../../service/GameService"
import GameCard from "./Game-card"
import SearchForm from "./Search-form"
import Spinner from '../../ui/Spinner'

// BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import "./Game-list.css"

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

    this.setState({ count: ++this.state.count, games: undefined })
    this.updateGameList()
  }

  handlePreviousPage = () => {

    this.setState({ count: --this.state.count, games: undefined })
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
        {!this.state.games && <Spinner />}



        <Link to="/games"><Button variant="dark" type="submit" className="btn-default">	
          &#10229;</Button></Link>

        {this.state.count > 1 && <Button onClick={this.handlePreviousPage} className="left">&lt;</Button>}
        <Button onClick={this.handleNextPage} className="right">&#62;</Button>
        <Container>
          <h1>All Games</h1>

          <Row>
            <Col md={6}>

              <SearchForm handleForm={input => this.handleForm(input)} />

            </Col>
            <Col md={6}>
              {this.state.searchResults && this.state.searchResults.map((elm) => (
                <GameCard key={elm.id} {...elm} />))}

            </Col>

          </Row>


          <div className="page-count">
            <p>Page: {this.state.count} </p>
          </div>

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
