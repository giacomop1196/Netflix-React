import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap"
import { Link, useLocation } from 'react-router-dom'
import netflixLogo from '/img/netflix_logo.png'

const NetflixNavbar = (props) => {

    const location = useLocation()

    console.log(location)

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Image src={netflixLogo} alt="Netflix Logo" width="90" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/"> Home </Link>
                        <Link className={location.pathname === '/tv-show' ? 'nav-link active' : 'nav-link'} to="/tv-show"> TV Shows </Link>
                        <Nav.Link>Movies</Nav.Link>
                        <Nav.Link>Recently Added</Nav.Link>
                        <Nav.Link>My List</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </Nav.Link>

                        <Nav.Link href="#" className="text-white">Kids</Nav.Link>
                        <Nav.Link href="#" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                            </svg>
                        </Nav.Link>

                        <NavDropdown
                            title={<Image src={`${props.user.profile_photo}`} alt="Avatar" width="30" />}
                            id="basic-nav-dropdown"
                            align="end"
                            variant="dark"
                        >
                            <NavDropdown.Item><Link className="text-decoration-none text-black" to="/setting"> Manage Profile </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="text-decoration-none text-black" to="/user"> Profile </Link></NavDropdown.Item>
                            <NavDropdown.Item>Help Center</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Sign out of Netflix</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NetflixNavbar 