import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function UserListItem({ user }) {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/${user.id}`}>
				<Card.Img src={user.avatar_url} />
			</Link>
			<Card.Body>
				<Card.Title as="h5">
					<strong>{user.login}</strong>
				</Card.Title>
				<Link to={`/${user.id}`}>
					<div className="d-grid gap-2 mb-auto">
						<Button type="submit" variant="primary" className="p-2 ">
							More
						</Button>
					</div>
				</Link>
			</Card.Body>
		</Card>
	);
}
