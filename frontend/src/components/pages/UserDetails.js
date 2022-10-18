import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Col, Row, Badge, ListGroup, Image, Card } from "react-bootstrap";
import axios from "axios";

function UserDetails(props) {
	// TODO Add a loading spinner
	const [state, setState] = useState({
		profile: {},
		repository: [],
	});

	const { uid } = useParams();

	const getUser = async () => {
		// TODO handle error .then(response => {}) .catch(error => {})
		const profileResponse = await axios.get(`api/profiles/${uid}`);
		const repoResponse = await axios.get(`api/profiles/${uid}/repos`);
		const profile = profileResponse.data;
		const repos = repoResponse.data;

		setState({ profile: profile, repository: repos });
	};

	useEffect(() => {
		getUser();
		// Disable the getUser() dependency of useEffect.
		//eslint-disable-next-line
	}, []);

	return (
		<React.Fragment>
			<Link to="/" className="btn btn-light">
				Go Back
			</Link>

			<Container>
				<Card>
					<Card.Body>
						<Row>
							<Col md={3}>
								<div className="d-grid gap-2 align-items-center">
									<Image className="img-fluid md-2" src={state.profile.avatar_url} />
									<h4 className="my-2 mx-auto">{state.profile.login}</h4>

									<Button
										href={state.profile.html_url}
										type="submit"
										variant="info"
										className="p-2"
									>
										Visit Github Profile
									</Button>
								</div>
							</Col>

							<Col md={9}>
								<div className="my-3">
									<Badge bg="danger">Followers: {state.profile.followers}</Badge>
									<Badge bg="success">Following: {state.profile.following}</Badge>
									<Badge bg="info">Public Repos: {state.profile.public_repos}</Badge>
									<Badge bg="primary">Public Gists: {state.profile.public_gists}</Badge>
								</div>

								<ListGroup>
									<ListGroup.Item>Username: {state.profile.login}</ListGroup.Item>
									<ListGroup.Item>Company: {state.profile.company}</ListGroup.Item>
									<ListGroup.Item>Location: {state.profile.location}</ListGroup.Item>
								</ListGroup>
							</Col>
						</Row>
					</Card.Body>
				</Card>

				<h3 className="m-3">Repositries</h3>

				<Card className="mb-3">
					<ListGroup variant="flush">
						{state.repository &&
							state.repository.map((repo, i) => (
								<ListGroup.Item key={i}>
									<div className="d-flex justify-content-between align-items-baseline">
										<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
											<h5>{repo.name}</h5>
										</a>
										<div>
											<Badge bg="danger">Stars: {repo.stargazers_count}</Badge>
											<Badge bg="success">Watchers: {repo.watchers_count}</Badge>
											<Badge bg="info">Forks: {repo.forks_count}</Badge>
										</div>
									</div>
								</ListGroup.Item>
							))}
					</ListGroup>
				</Card>
			</Container>
		</React.Fragment>
	);
}
export default UserDetails;
