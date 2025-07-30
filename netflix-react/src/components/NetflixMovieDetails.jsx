import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image, Spinner, Alert, Card, Button, Form } from "react-bootstrap"
import DeleteCommentButton from './DeleteCommentButton'

const NetflixMovieDetails = () => {

    // Id passato come parametro
    const params = useParams()
    const movieId = params.movieid

    // Link API per i dettagli del film
    const apiLink = 'http://www.omdbapi.com/?apikey=a0a627c0&i='

    // Link API per i commenti del film
    const apiComments = 'https://striveschool-api.herokuapp.com/api/comments/'

    const [movieDetails, setMovieDetails] = useState(null)
    const [movieComments, setMovieComments] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (params) {
            getMovieDetails()
            getComment()
        }
    }, [params])

    // Funzione per recuperare i dettagli dei film dall'api
    const getMovieDetails = () => {

        fetch(apiLink + movieId, {
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Errore nel recupero dei dati')
            })
            .then((detail) => {
                console.log(detail, 'dettagli arrivati')

                setMovieDetails(detail)
                setIsLoading(false)
            })
            .catch((error) => {

                console.error("Errore nel recupero dei dati:", error);
                setIsLoading(false)
                setIsError(true)
            })
    }

    // Funzione per recuperare i commenti dei film dall'api
    const getComment = () => {

        fetch(apiComments + movieId, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY5MDc4Y2RkZjAwMTU1ZDY3YTgiLCJpYXQiOjE3NTMzNTgyODYsImV4cCI6MTc1NDU2Nzg4Nn0.ntvzmv3QJspPXrDjgVOP7D-G-21XgtcpvxDGCEHrBgw"
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Errore nel recupero dei dati')
            })
            .then((comment) => {

                console.log(comment, 'commenti')
                setMovieComments(comment)
                setIsLoading(false)
            })
            .catch((error) => {

                console.error("Errore nel recupero dei dati:", error);
                setIsLoading(false)
                setIsError(true)
            })
    }

    return (

        <Container fluid className="bg-dark text-white min-h-screen py-5">

            {/* Spinner */}
            {isLoading && (
                <div className="text-center mb-3">
                    <Spinner animation="grow" />
                </div>
            )}

            {/* Errore se vado nel catch */}
            {isError && (
                <Alert variant="danger" className="text-center">
                    Si è verificato un errore durante il recupero dei dettagli del film.
                </Alert>
            )}

            {/* Dettagli del film */}
            {!isLoading && !isError && movieDetails && (
                <Row className="justify-content-center">
                    <Col xs={12} md={4} className="text-center">
                        <Image src={movieDetails.Poster} fluid alt={movieDetails.Title} />
                    </Col>
                    <Col xs={12} md={8}>
                        <h2 className="text-white mt-3 mt-md-0">{movieDetails.Title}</h2>
                        <p className="text-white">{movieDetails.Year} | {movieDetails.Genre} | {movieDetails.Runtime}</p>
                        <p className="text-white">{movieDetails.Plot}</p>
                        <p className="text-white">Regista: {movieDetails.Director}</p>
                        <p className="text-white">Attori: {movieDetails.Actors}</p>
                        <p className="text-white">IMDb Rating: {movieDetails.imdbRating}</p>
                    </Col>
                </Row>

            )}

            {/* Form per lasciare un commento */}
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8} lg={6}>
                    <h3 className='text-center text-white mb-4'>Commenti</h3>
                    <Form className="p-4 border rounded shadow-lg">
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea"
                                rows={4}
                                placeholder="Scrivi qui il tuo commento..."
                                className="bg-secondary text-white border-0"
                            />
                        </Form.Group>
                        <div className="d-grid">
                            <Button variant="success" type="submit" className="py-2">
                                Invia Commento
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>

            {/* Lista dei commenti */}
            {!isLoading && !isError && movieComments && (
                <Row className="justify-content-center mt-3">
                    <Col className="text-center d-flex  justify-content-center mt-2 flex-wrap overflow-auto">
                        {movieComments.map((comment) => {
                            return (
                                <Card className="text-center m-2" key={comment._id}>
                                    <Card.Header>{comment.author}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {comment.comment}
                                        </Card.Text>
                                        <DeleteCommentButton commentId={comment._id} funComment={getComment} />
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{new Date(comment.createdAt).toLocaleDateString()}</Card.Footer>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default NetflixMovieDetails