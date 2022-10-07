import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function UserListItem({ user }) {
	return (
		<Card textAlign="center">
			<Card.Img src={user.avatar_url} size="tiny" circular centered />
			<h4>{user.login}</h4>
			<Link to={`/${user.login}`}>More</Link>
		</Card>
	);
}
