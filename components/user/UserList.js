import React from "react";
import { Row, Col } from "react-bootstrap";
import UserListItem from "./UserListItem";

export default function UserList({ users }) {
	return (
		<Row>
			{users &&
				users.map((item, i) => {
					return (
						<Col key={i}>
							<UserListItem user={item} />
						</Col>
					);
				})}
		</Row>
	);
}
