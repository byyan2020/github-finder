import React from "react";
import { Card } from "react-bootstrap";

function About() {
	return (
		<Card>
			<Card.Title as="h4" content="Github Finder React App" />
			<p>Version: 1.0.0</p>
			<p>Developed By: Mahmudul Alam</p>
			<p>Inspired From: Brad Traversy</p>
		</Card>
	);
}
export default About;
