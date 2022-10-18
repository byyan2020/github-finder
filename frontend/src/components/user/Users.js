import React, { useState, useEffect } from "react";
import SearchUser from "./SearchUser";
import UserList from "./UserList";
import axios from "axios";

function Users() {
	const [state, setState] = useState({ users: [], query: "" });
	// TODO Add a loading spinner

	const fetchUser = async () => {
		// TODO handle error .then(response => {}) .catch(error => {})
		if (state.query) {
			const response = await axios.get(`api/search?q=${state.query}`);
			const users = response.data;
			setState({ ...state, users: users });
		} else {
			const response = await axios.get(`api/profiles/`);
			const users = response.data;
			setState({ ...state, users: users });
		}
	};

	useEffect(() => {
		fetchUser();
		// Disable the fetchUser() dependency of useEffect.
		// eslint-disable-next-line
	}, [state.query]);

	const handleSearch = (query) => {
		setState({ ...state, query: query });
	};

	const handleClear = (e) => {
		setState({ ...state, query: "" });
	};

	return (
		<React.Fragment>
			<SearchUser onSearch={handleSearch} onClear={handleClear} showClear={state.query !== ""} />
			<UserList users={state.users} />
		</React.Fragment>
	);
}
export default Users;
