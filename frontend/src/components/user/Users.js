import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchUser from "./SearchUser";
import UserList from "./UserList";

function Users() {
	const [state, setState] = useState({ users: [], loading: false, query: "" });

	useEffect(() => {
		const fetchUser = async () => {
			if (state.query) {
				setState({ ...state, loading: true });
				const response = await fetch(`https://api.github.com/search/users?q=${state.query}`);
				const users = await response.json();
				setState({ ...state, users: users.items, loading: false });
				console.log(users.items);
			}
		};
		fetchUser();
		//eslint-disable-next-line
	}, [state.query]);

	const handleSearch = (query) => {
		setState({ ...state, query: query });
	};

	const handleClear = (e) => {
		setState({ ...state, users: [] });
	};

	return (
		<React.Fragment>
			<Container>
				<SearchUser
					onSearch={handleSearch}
					onClear={handleClear}
					showClear={state.users.length > 1}
				/>
				{/* <Loader active={state.loading} /> */}
				<UserList users={state.users} />
			</Container>
		</React.Fragment>
	);
}
export default Users;
