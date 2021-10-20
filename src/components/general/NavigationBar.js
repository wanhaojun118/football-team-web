import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/navigationBar.scss";

const NavigationBar = () => (
    <Navbar className="navigation-bar">
        <Container>
            <Nav>
                <NavLink to="/home" className="navigation-link">Home</NavLink>
                <NavLink to="/team" className="navigation-link">My Team</NavLink>
            </Nav>
        </Container>
    </Navbar>
);

export default NavigationBar;