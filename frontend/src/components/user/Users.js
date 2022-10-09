import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchUser from "./SearchUser";
import UserList from "./UserList";
import axios from "axios";

function Users() {
	const [state, setState] = useState({ users: [], loading: false, query: "" });

	const fetchUser = async () => {
		const response = await axios.get(`api/profiles/`);
		const users = response.data;
		setState({ ...state, users: users, loading: false });
	};

	useEffect(() => {
		fetchUser();
		//eslint-disable-next-line
	}, [state.query]);

	const handleSearch = (query) => {
		setState({ ...state, query: query });
	};

	const handleClear = (e) => {
		fetchUser();
	};

	return (
		<React.Fragment>
			<Container>
				<SearchUser onSearch={handleSearch} onClear={handleClear} showClear={state.query !== ""} />
				<UserList users={state.users} />
			</Container>
		</React.Fragment>
	);
}
export default Users;
