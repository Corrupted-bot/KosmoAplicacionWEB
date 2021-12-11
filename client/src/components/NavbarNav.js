import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import useAuth from "../auth/useAuth";

const NavbarNav = () => {

    const auth = useAuth();

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Fundacion Kosmo Inclusión</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    {auth.isLogged() && (
                        <NavDropdown title={auth.user.username} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">Mi perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Configuraciones</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={auth.logout}>Cerrar sesión</NavDropdown.Item>
                        </NavDropdown>
                    )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarNav;