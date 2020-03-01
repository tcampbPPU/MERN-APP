import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/" className="nav-link">
						<span className="link-text">Home</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/about" className="nav-link">
						<span className="link-text">About</span>
					</Link>
				</li>

        <li className="nav-item">
					<Link to="/settings" className="nav-link">
						<span className="link-text">Settings</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
