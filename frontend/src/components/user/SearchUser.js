import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function SearchUser(props) {
	const [query, setQuery] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setQuery(e.target.value);
		error && setError(false);
	};

	const handleClear = (e) => {
		e.preventDefault();
		props.onClear();
		setQuery("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query === "") {
			setError(true);
		} else {
			props.onSearch(query);
		}
	};

	return (
		<Container className="my-5">
			<Form onSubmit={handleSubmit} className="d-flex">
				<Form.Control
					type="text"
					name="q"
					value={query}
					onChange={handleChange}
					placeholder="Search User..."
					className="mr-sm-2 ml-sm-5"
				></Form.Control>

				<Button type="submit" variant="outline-success" className="">
					Search
				</Button>

				{props.showClear && (
					<Button onClick={handleClear} variant="warning" className="mx-2">
						Clear
					</Button>
				)}
			</Form>
			{error && (
				<Alert variant="danger" className="my-3">
					Please enter username to search
				</Alert>
			)}
		</Container>
	);
}
export default SearchUser;
