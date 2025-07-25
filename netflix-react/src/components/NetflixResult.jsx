import { Component } from "react";
import { Container, Row, Col, Image, Spinner, Alert } from "react-bootstrap"


const apiLink = 'http://www.omdbapi.com/?apikey=a0a627c0&s='

class NetflixResult extends Component {

    state = {
        results: { Search: [] },
        isLoading: true,
        isError: false,
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
                this.setState({
                    results: films,
                    isLoading: false
                },

                )
            })
            .catch((error) => {

                console.error("Errore nel recupero dei dati:", error);
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            })
    }

    componentDidMount() {
        this.getResults()
    }

    render() {

        const resultsArray = this.state

        const finalResult = resultsArray.results.Search


        return (
            <Container fluid className="px-0">
                
                <h3>{this.props.resultName}</h3>
                <p className="mt-2">Total Result: {resultsArray.results.totalResults}</p>
                
                <Row className=" overflow-x-auto flex-nowrap hide-scrollbar pb-3 d-flex">
                     {/* Spinner */}
                    {this.state.isLoading && (
                        <div className="text-center mb-3">
                            <Spinner animation="grow" />
                        </div>
                    )}
                    {/* Errore se vado nel catch */}
                    {this.state.isError && (
                        <Alert variant="danger" className="text-center">
                            Errore nel recupero dei dati
                        </Alert>
                    )}
                    {/* Ciclo i risultati */}
                    {finalResult.map((result) => {
                        return (
                            <Col xs={9} md={6} lg={2} key={result.imdbID}>
                                <Image src={result.Poster} fluid alt="img" style={{
                                    width: '100%', // Ho provato a metterlo esterno in App.css ma non funziona
                                    height: '180px',
                                    objectFit: 'cover',
                                    objectPosition: 'top'
                                }} />
                                <p>{result.Title} - {result.Year}</p>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default NetflixResult