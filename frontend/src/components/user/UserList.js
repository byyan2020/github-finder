import React from "react";
import UserListItem from "./UserListItem";
import { Container, Col, Row } from "react-bootstrap";

export default function UserList({ users }) {
	return (
		<Container>
			<Row>
				{users &&
					users.map((item, i) => {
						return (
							<Col key={i} sm={12} md={6} lg={4} xl={3}>
								<UserListItem user={item} />
							</Col>
						);
					})}
			</Row>
		</Container>
	);
}
