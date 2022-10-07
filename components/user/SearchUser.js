import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function SearchUser(props) {
	const [query, setQuery] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setQuery(e.target.value);
		error && setError(false);
		// console.log(query);
	};

	const handleClear = (e) => {
		e.preventDefault();
		props.onClear();
		setQuery("");
	};

	const handleSubmit = () => {
		if (query === "") {
			setError(true);
		} else {
			props.onSearch(query);
		}
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Control
					type="text"
					icon="search"
					placeholder="Search User..."
					value={query}
					onChange={handleChange}
				/>
				<Button content="Search" color="black" type="submit"></Button>
				{props.showClear && <Button content="Clear" onClick={handleClear} type="button"></Button>}
			</Form>
		</div>
	);
}
export default SearchUser;
