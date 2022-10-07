import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image, ListGroup, Spinner } from "react-bootstrap";
import { Icon } from "semantic-ui-react";

function UserDetails(props) {
	const [state, setState] = useState({
		profile: {},
		repository: [],
		loading: true,
	});

	useEffect(() => {
		const getUser = async (uid = props.match.params.uid) => {
			// const client_id = process.env.REACT_APP_CLIENT_ID;
			// const client_secret = process.env.REACT_APP_CLIENT_SECRET;
			setState({ ...state, loading: true });
			const profileResponse = await fetch(`https://api.github.com/users/${uid}`);

			const repoResponse = await fetch(`https://api.github.com/users/${uid}/repos`);
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

			<Card.Group horizontal raised>
				<Card textAlign="center" style={{ width: "40%" }} loading={state.loading}>
					<Image src={state.profile.avatar_url} size="tiny" circular centered />
					<Card.Title content={state.profile.name} size="medium" />
					<Card.Title
						content={`Location: ${state.profile.location}`}
						size="small"
						style={{ marginTop: "0px" }}
					/>
					{!!state.profile.hireable ? (
						<Button>
							<Icon name="checkmark" color="green" />
							Hireable
						</Button>
					) : (
						<Button>
							<Icon name="close" color="red" /> Not Hireable
						</Button>
					)}
				</Card>
				<Card style={{ width: "60%" }} loading={state.loading}>
					<Card.Title content="Bio" />

					<p>{state.profile.bio}</p>

					<Button
						as="a"
						href={state.profile.html_url}
						target="_blank"
						content="Visit Github Profile"
						color="black"
						size="mini"
					/>

					<ListGroup>
						<ListGroup.Item>Username: {state.profile.login}</ListGroup.Item>
						<ListGroup.Item>Company: {state.profile.company}</ListGroup.Item>
						<ListGroup.Item>Website: {state.profile.blog}</ListGroup.Item>
					</ListGroup>
				</Card>
			</Card.Group>
			<Card textAlign="center">
				<Button color="red">
					<Icon name="users" />
					Followers: {state.profile.followers}
				</Button>
				<Button color="green">
					<Icon name="user plus" />
					Following: {state.profile.following}
				</Button>
				<Button color="grey">
					<Icon name="github" />
					Public Repos: {state.profile.public_repos}
				</Button>
				<Button color="black">
					<Icon name="github alternate" />
					Public Gists: {state.profile.public_gists}
				</Button>
			</Card>
			<Card.Group>
				<Spinner active={state.loading} />
				{state.repository &&
					state.repository.map((repo, i) => (
						<Card as="h2" key={i}>
							<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
								{repo.name}
							</a>
						</Card>
					))}
			</Card.Group>
		</React.Fragment>
	);
}
export default UserDetails;
