import { Container, Row, Col, Button } from "react-bootstrap"

const NetflixFooter = () => {

    return (
        <footer className="py-5 bg-dark">
            <Container>
                <Row className="mb-4">
                    <Col xs={12} className="text-center text-md-start">
                        <a href="https://www.facebook.com/netflixitalia" target="_blank" rel="noopener noreferrer" className="me-3 text-white-50">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="me-3 text-white-50">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="me-3 text-white-50">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://www.youtube.com/@Netflix" target="_blank" rel="noopener noreferrer" className="text-white-50">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </Col>
                </Row>

                <Row className="text-white-50">
                    <Col md={3} xs={6} className="mb-3">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white-50 text-decoration-none">Audio and Subtitles</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Media Center</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={3} xs={6} className="mb-3">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white-50 text-decoration-none">Audio Description</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Investor Relations</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Legal Notices</a></li>
                        </ul>
                    </Col>
                    <Col md={3} xs={6} className="mb-3">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white-50 text-decoration-none">Help Center</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Jobs</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Cookie Preferences</a></li>
                        </ul>
                    </Col>
                    <Col md={3} xs={6} className="mb-3">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white-50 text-decoration-none">Gift Cards</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Terms of Use</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Corporate Information</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col xs={12} className="mb-3">
                        <Button variant="outline-secondary" className="rounded-0">Service Code</Button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-white-50">
                        &copy; 1997-2023 Netflix, Inc.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default NetflixFooter