import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/navigationBar.scss";

const NavigationBar = () => (
    <Navbar className="navigation-bar">
        <Container>
            <Nav>
                <NavLink to="/team" className="navigation-link">MY TEAM</NavLink>
                <NavLink to="/recruit" className="navigation-link">RECRUIT</NavLink>
                <NavLink to="/compare" className="navigation-link">1 ON 1</NavLink>
            </Nav>
        </Container>
    </Navbar>
);

export default NavigationBar;