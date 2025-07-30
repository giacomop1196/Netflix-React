import { Component } from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Spinner, Alert } from "react-bootstrap"




const NetflixResult = (props) => {

    const apiLink = 'http://www.omdbapi.com/?apikey=a0a627c0&s='

    //  state = {
    //      results: { Search: [] },
    //      isLoading: true,
    //       isError: false,
    //  }

    const [results, setResults] = useState({ Search: [] })
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getResults()
    }, [props.resultName])


    // Funzione per recuperare i film dall'api (Il parametro è passato dalla props)
    const getResults = () => {

        fetch(apiLink + props.resultName, {
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Errore nel recupero dei dati')
            })
            .then((films) => {
                console.log(films, 'film arrivati')

                setResults(films)
                setIsLoading(false)
            })
            .catch((error) => {

                console.error("Errore nel recupero dei dati:", error);
                setIsLoading(false)
                setIsError(true)
            })
    }

    {/* Array principlae che ci arriva dall'api */ }
    const finalResult = results.Search

    {/* Array che contiene solo i dati di Search */ }
    const totalCount = results.totalResults;


    return (
        <Container fluid className="px-0">

            {/* Titolo della ricerca */}
            <h3>{props.resultName}</h3>

            {/* Totale risultati trovati dall'api */}
            <p className="mt-2">Total Result: {totalCount}</p>

            <Row className=" overflow-x-auto flex-nowrap hide-scrollbar pb-3 d-flex">
                {/* Spinner */}
                {isLoading && (
                    <div className="text-center mb-3">
                        <Spinner animation="grow" />
                    </div>
                )}
                {/* Errore se vado nel catch */}
                {isError && (
                    <Alert variant="danger" className="text-center">
                        Errore nel recupero dei dati
                    </Alert>
                )}
                {/* Ciclo i risultati */}
                {finalResult.map((result) => {
                    return (
                        <Col xs={9} md={6} lg={2} key={result.imdbID}>
                            <Image src={result.Poster} fluid alt="img" className="img-scroll" />
                            <p>{result.Title} - {result.Year}</p>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default NetflixResult