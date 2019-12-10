import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: 0,
			img: '',
			isEditing: false,
			isChanged: false
		};
		if (props.routeProps && props.routeProps.match && props.products) {
			const old = props.products.find((i) => i.id == props.routeProps.match.params.id);
			this.state = { ...old, isEditing: true, old };
			console.log('new state: ', this.state);
		}
		this.add = this.add.bind(this);
		this.baseState = this.state;
	}

	handleChange = (e) => {
		// console.log('hit function', e.target.name)
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	add = () => {
		let product = { ...this.state };
		// console.log(product);
		this.props.addProduct(product);
	};

	cancel = () => {
		this.setState(this.baseState);
	};

	componentDidUpdate(newProps) {
		if (
			!this.state.isChanged &&
			this.state.id &&
			(this.state.name !== this.state.old.name ||
				this.state.img !== this.state.old.img ||
				this.state.price !== this.state.old.price)
		) {
			this.setState({ isChanged: true });
		}
	}

	render() {
		const { addItem, editItem } = this.props;
		const { id, name, price, img, isEditing, isChanged } = this.state;
		return (
			<form className="newProduct bg-green">
				<input
					onChange={(e) => this.handleChange(e)}
					value={img}
					placeholder="https://imgur.com"
					type="url"
					name="img"
					pattern="https://.*"
				/>
				<input
					onChange={(e) => this.handleChange(e)}
					value={name}
					placeholder="product name"
					type="text"
					name="name"
				/>
				<input
					onChange={(e) => this.handleChange(e)}
					value={price}
					placeholder="price"
					type="number"
					name="price"
				/>
				{isEditing ? isChanged ? (
					<button
						onClick={() => {
							if (isEditing) {
								addItem({ name, price, img });
							} else {
								editItem({ id, name, price, img });
							}
						}}
						className="addProductBtn"
					>
						Save Changes
					</button>
				) : (
					''
				) : (
					<button
						onClick={() => {
							if (isEditing) {
								addItem({ name, price, img });
							} else {
								editItem({ id, name, price, img });
							}
						}}
						className="addProductBtn"
					>
						Add to Inventory
					</button>
				)}{' '}
				<button onClick={() => this.cancel()} className="cancelAddBtn">
					Cancel
				</button>
			</form>
		);
	}
}
