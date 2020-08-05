import React, { useEffect, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

const User = ({ user, loading, repos, getUser, getRepos, match }) => {

	//componentDidMount va a ser reemplazado por el useEffect, que llama a las mismas funciones
	useEffect(() => {
		getUser(match.params.login);
		getRepos(match.params.login);	
		//[] va a evitar que vaya en loop. [] vacío hace que corra solamente al cargar el componente. Si hago caso al warning de poner dependencias, va a ir en loop. Por eso va la línea de disable de eslint, para sacar ese warning
		// eslint-disable-next-line
	}, []); 

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		company,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = user;

	if (loading) return <Spinner />;

	else
		return (
			<Fragment>
				<Link to="/" className="btn btn-light">
					Back to Search
				</Link>
				<span>
					Hireable:{" "}
					{hireable ? (
						<i className=" fa fa-check text-success"></i>
					) : (
						<i className=" fa fa-times-circle text-danger"></i>
					)}
				</span>
				<div className="card grid-2">
					<div className="all-center">
						<img
							src={avatar_url}
							className="round-img"
							style={{ width: "150px" }}
							alt="avatar"
						/>
						<h1>{name}</h1>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a
							href={html_url}
							className="btn btn-dark my-1"
							rel="noopener noreferrer"
							target="_blank"
						>
							Go to GitHub
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Username: </strong>
										{login}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company: </strong>
										{company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website: </strong>
										{blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>

				<div className="card text-center">
					<div className="badge badge-primary">Followers: {followers}</div>
					<div className="badge badge-success">following: {following}</div>
					<div className="badge badge-danger">Public repos: {public_repos}</div>
					<div className="badge badge-dark">Public gists: {public_gists}</div>
				</div>

				<Repos repos={repos}></Repos>
			</Fragment>
		);
};

User.propTypes = {
	loading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	repos: PropTypes.array.isRequired,
	getUser: PropTypes.func.isRequired,
	getRepos: PropTypes.func.isRequired
};

export default User;
