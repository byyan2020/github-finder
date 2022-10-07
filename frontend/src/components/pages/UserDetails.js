import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Col, Row, Badge, ListGroup, Image, Card } from "react-bootstrap";
import { Icon } from "semantic-ui-react";

function UserDetails(props) {
	const [state, setState] = useState({
		profile: {},
		repository: [],
		loading: true,
	});

	const { uid } = useParams();
	console.log(uid);
	useEffect(() => {
		const getUser = async () => {
			// const client_id = "7dc85f132fdf952c520c";
			// const client_secret = "1e00fea8f25f3f35d582917dd4d12555a1baa6f1";
			setState({ ...state, loading: true });
			const profileResponse = await fetch(
				`https://api.github.com/users/${uid}` //?client_id=${client_id}&client_secret=${client_secret}
			);

			const repoResponse = await fetch(
				`https://api.github.com/users/${uid}/repos` //?per_page=5&sort=asc&client_id=${client_id}&client_secret=${client_secret}
			);
			const profile = await profileResponse.json();
			const repos = await repoResponse.json();

			setState({ profile: profile, repository: repos, loading: false });
		};
		getUser();

		//eslint-disable-next-line
	}, []);

	return (
		<React.Fragment>
			<Link to="/" className="btn btn-light">
				Go Back
			</Link>

			<Container>
				<Card>
					<Row>
						<Col className="md-3">
							<Image class="w-25 p-3" src={state.profile.avatar_url} roundedCircle />
							<h4>{state.profile.login}</h4>
							<Button href={state.profile.html_url} type="submit" variant="primary" className="p-2">
								Visit Github Profile
							</Button>
						</Col>

						<Col className="md-3">
							<Badge bg="danger">
								<Icon name="users" />
								Followers: {state.profile.followers}
							</Badge>
							<Badge bg="success">
								<Icon name="user plus" />
								Following: {state.profile.following}
							</Badge>
							<Badge bg="info">
								<Icon name="github" />
								Public Repos: {state.profile.public_repos}
							</Badge>
							<Badge bg="primary">
								<Icon name="github alternate" />
								Public Gists: {state.profile.public_gists}
							</Badge>

							<ListGroup>
								<ListGroup.Item>Username: {state.profile.login}</ListGroup.Item>
								<ListGroup.Item>Company: {state.profile.company}</ListGroup.Item>
								<ListGroup.Item>Location: {state.profile.Location}</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Card>

				<ListGroup variant="flush">
					{state.repository &&
						state.repository.map((repo, i) => (
							<ListGroup.Item as="h2" key={i}>
								<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
									{repo.name}
								</a>
							</ListGroup.Item>
						))}
				</ListGroup>
			</Container>
		</React.Fragment>
	);
}
export default UserDetails;
