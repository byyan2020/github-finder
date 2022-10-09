import React from "react";
import UserListItem from "./UserListItem";
import { Container, Col, Row, Alert } from "react-bootstrap";

export default function UserList({ users }) {
	return (
		<Container>
			<Row>
				{users.length > 0 ? (
					users.map((item, i) => {
						return (
							<Col key={i} sm={12} md={6} lg={4} xl={3}>
								<UserListItem user={item} />
							</Col>
						);
					})
				) : (
					<Alert variant="light" className="my-3">
						User not exist
					</Alert>
				)}
			</Row>
		</Container>
	);
}
