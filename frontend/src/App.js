import React from "react";
import { Container } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
import Users from "./components/user/Users";
import UserDetails from "./components/pages/UserDetails";
import About from "./components/pages/About";
import Header from "./components/layout/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<Users />} />
					<Route path="/about" element={<About />} />
					<Route path="/:uid" element={<UserDetails />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
