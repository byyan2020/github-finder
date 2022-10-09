import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>GitStar Database</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/">
								<Nav.Link href="#home">Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/about">
								<Nav.Link href="#link">About</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default Header;
