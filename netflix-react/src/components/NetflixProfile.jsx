import { Component } from "react";
import { Container, Row, Col, DropdownButton, Button, Image, Form, Dropdown } from "react-bootstrap"
import avatarImg from '/img/avatar.png'

class NetflixProfile extends Component {
    render() {
        return (
            <Container className="bg-dark py-4" fluid>
                <Row>
                    <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-3">
                        <h1 className="text-white pb-3 border-bottom border-secondary border-opacity-25">Edit Profile</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-3 d-flex flex-column flex-md-row">
                        <div className="mb-3 mb-md-0 me-md-3">
                            <Image src={avatarImg} alt="Profile Avatar" className="img-fluid rounded-0"
                                style={{
                                    width: '180px',
                                    height: '180px',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>

                        <div className="flex-grow-1">
                            <Form>
                                <Form.Control type="text" className="form-control-plaintext text-white bg-secondary py-1 px-2 mb-3"
                                    value="Strive Student" disabled />

                                <p className="text-white mb-2">Language:</p>
                                <div className="mb-4">
                                    <DropdownButton variant="dark" id="bg-nested-dropdown" className="text-white py-1"
                                        title='English'>
                                        <Dropdown.Item eventKey="1">Italiano</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Francese</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Spagnolo</Dropdown.Item>
                                    </DropdownButton>
                                </div>

                                <div className="pb-3 mb-4 border-bottom border-secondary border-opacity-25"></div>

                                <p className="text-white mb-2">
                                    <span className="bg-secondary py-1 px-2">Maturity Settings:</span>
                                </p>
                                <a href="#" className="text-light fw-bold mb-2 d-inline-block text-decoration-none">ALL MATURITY
                                    RATINGS</a>
                                <p className="text-white small mb-3">Show titles of all maturity ratings for this profile.</p>
                                <Button variant="outline-secondary" className="rounded-0 text-uppercase">EDIT</Button>

                                <div className="pb-3 mb-4 mt-4 border-bottom border-secondary border-opacity-25"></div>

                                <p className="text-white mb-3">Autoplay controls:</p>

                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check className="border-secondary text-light" type="checkbox" defaultChecked
                                            label="Autoplay next episode in a series on all devices." />
                                    </Form.Group>

                                </div>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicCheckboxs">
                                        <Form.Check className="border-secondary text-light" type="checkbox" defaultChecked
                                            label="Autoplay previews while Browse on all devices." />
                                    </Form.Group>
                                </div>
                                

                                <div className="pb-3 mb-4 mt-4 border-bottom border-secondary border-opacity-25"></div>
                                

                                <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
                                    <Button variant="light" className="rounded-0 text-dark px-4 py-2 text-uppercase" type="submit">SAVE</Button>
                                    <Button variant="outline-secondary" className="rounded-0 px-4 py-2 text-uppercase">CANCEL</Button>
                                    <Button variant="outline-secondary" className="rounded-0 px-4 py-2 text-uppercase">DELETE
                                        PROFILE</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NetflixProfile