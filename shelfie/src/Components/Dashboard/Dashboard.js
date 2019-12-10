import React from 'react';
import './Dashboard.css';
import Product from '../Product/Product';

const Dashboard = ({ products = [], deleteItem, editItem }) => {
	return (
		<div className="dashboard">
			{products.map((el, i) => (
				<Product
					key={i}
					id={el.id}
					img={el.img}
					price={el.price}
					name={el.name}
					deleteItem={deleteItem}
					editItem={editItem}
				/>
			))}
		</div>
	);
};

export default Dashboard;
