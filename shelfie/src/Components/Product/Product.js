import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			img: props.img,
			name: props.name,
			price: props.price
		};
	}

	render() {
		const { deleteItem } = this.props;
		const { id, img, name, price } = this.state;
		if (!id && !img && !name) {
			return <div />;
		}
		return (
			<section className="productContainer bg-red">
				<section>
					<img src={img} alt="image not found" />
				</section>
				<section className="details">
					<div>{name}</div>
					<div>${price}</div>
					<Link to={`/edit-item/${id}`}>Edit</Link>
					<button className="editButton" onClick={() => deleteItem(id)}>
						Delete
					</button>
				</section>
			</section>
		);
	}
}
