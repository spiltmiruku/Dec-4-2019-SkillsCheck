import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div
			className="bg-dark-red"
			style={{ padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<img src="/shelfie_icon.png" width="32" height="32" />
			<h1 style={{ display: 'inline-block', color: 'white', marginLeft: 10 }}>SHELFIE</h1>
			<Link
				to="/"
				className="link bg-light-red text-black round"
				style={{ textDecoration: 'none', marginLeft: 20, padding: 10 }}
			>
				Dashboard
			</Link>
			<Link
				to="/add-item"
				className="link bg-light-red text-black round"
				style={{ textDecoration: 'none', padding: 10, marginLeft: 8 }}
			>
				Add Item
			</Link>
		</div>
	);
};

export default Header;
