import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    // useNavigate è un altro hook di react-router-dom che si invoca
    // senza parametri e restituisce una funzione che in gergo si chiama "navigate"

    return (
        <Container fluid className="bg-dark text-white min-h-screen py-5">
            <Row className="justify-content-center mt-3">
                <Col className="text-center min-vh-100">
                    <h3>404 - Not Found</h3>
                    <Button variant="dark" onClick={() => {

                            navigate('/')
                        }}>Torna alla Home</Button>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound