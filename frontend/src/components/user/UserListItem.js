import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function UserListItem({ user }) {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/${user.login}`}>
				<Card.Img src={user.avatar_url} variant="top" />
			</Link>
			<Card.Body>
				<Card.Title as="h4">
					<strong>{user.login}</strong>
				</Card.Title>
				<Link to={`/${user.login}`}>
					<div className="d-grid gap-2">
						<Button type="submit" variant="primary" className="p-2">
							More
						</Button>
					</div>
				</Link>
			</Card.Body>

			{/* <Button secondary content="More" as={Link} to={`/${user.login}`} /> */}
		</Card>
	);
}
