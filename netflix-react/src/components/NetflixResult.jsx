import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap"

const apiLink = 'http://www.omdbapi.com/?apikey=a0a627c0&s='

class NetflixResult extends Component {

    state = {
        results: { Search: [] }
    }

    getResults = () => {
        fetch(apiLink + this.props.resultName, {
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Errore nel recupero dei dati')
            })
            .then((films) => {
                console.log(films)
                this.setState({ results: films })
            })
            .catch((error) => {
                console.error("Errore nel recupero dei dati:", error);
            })
    }

    componentDidMount() {
        this.getResults()
    }

    render() {

        const resultsArray = this.state

        const finalResult = resultsArray.results.Search

        console.log('risultato finale', finalResult)

        return (
            <Container fluid className="px-0">
                <h3 className="text-white mb-3">{this.props.resultName}</h3>
                <Row className=" overflow-x-auto flex-nowrap hide-scrollbar pb-3 d-flex">
                    {finalResult.map((result) => {
                        return (
                            <Col xs={1} md={4} lg={2} className="netflix-poster-wrapper" key={result.imdbID}>
                                <Image src={result.Poster} fluid className="netflix-poster" alt="img" />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default NetflixResult