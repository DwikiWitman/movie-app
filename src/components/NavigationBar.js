import {Navbar, Container, Nav} from "react-bootstrap"

export default function NavigationBar() {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">CINEMA XXI FILMS</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">LOGIN</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}