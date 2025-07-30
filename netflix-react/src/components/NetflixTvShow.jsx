import { Container, Row, Col, Dropdown, Button } from "react-bootstrap"
import NetflixResult from "./NetflixResult";

const NetflixTvShow = () => {

  return (
    <Container fluid className="bg-dark text-white min-h-screen py-5">
      <section className="mb-5">
        <Row className="d-flex justify-content-between align-items-center mb-3">
          <Col className="d-flex align-items-center">
            <h2 className="text-white">TV Shows</h2>
            <Dropdown className="mx-5">
              <Dropdown.Toggle
                variant="outline-secondary"
                className="border-white rounded-0"
                id="dropdown-basic"
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Horror</Dropdown.Item>
                <Dropdown.Item>Anime</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs="auto" className="d-flex">
            <Button variant="outline-secondary" className="border-white mx-2 rounded-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-text-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </Button>
            <Button variant="outline-secondary" className="border-white rounded-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-menu-up"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793a.5.5 0 0 0 .707.293l1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"
                />
              </svg>
            </Button>
          </Col>
        </Row>
      </section>
      {/* Componenti */}
      <NetflixResult resultName='One Piece' />
      <NetflixResult resultName='The Walking Dead' />
      <NetflixResult resultName='Star Trek' />
    </Container>
  )
}
export default NetflixTvShow