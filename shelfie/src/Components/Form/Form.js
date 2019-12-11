import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      img: "",
      isEditing: false,
      isChanged: false
    };
    // get the product ID from the URL by using the routeProps that we pass in from the parent component
    if (props.routeProps && props.routeProps.match && props.products) {
      // we look for a product with that ID
      const existingProduct = props.products.find(
        i => i.id == props.routeProps.match.params.id
      );
      // if we find an existing product that matches the ID from the URL, change the state to have that product's information
      if (existingProduct) {
        this.state = {
          ...existingProduct,
          isEditing: true,
          // we store the original values of the product into a variable called "old" so we can check and know when a change is made
          old: existingProduct
        };
      }
    }
    this.add = this.add.bind(this);
    this.baseState = this.state;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  add = () => {
    let product = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    };
    this.props.addProduct(product);
  };

  cancel = () => {
    this.setState(this.baseState);
  };

  // we check if the new state is different from the old
  // if it is different, then we display the save changes button
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
    let saveButton = "";
    if (isEditing) {
      // we only want the save changes button to show up if we actually made a change to the existing product
      if (isChanged) {
        saveButton = (
          <button
            onClick={() => editItem({ id, name, price, img })}
            className="addProductBtn"
          >
            Save Changes
          </button>
        );
      }
    } else {
      // if we are not editing an existing product, then show the Add to Inventory button
      saveButton = (
        <button
          onClick={() => addItem({ name, price, img })}
          className="addProductBtn"
        >
          Add to Inventory
        </button>
      );
    }
    return (
      <form className="newProduct bg-green">
        <input
          onChange={e => this.handleChange(e)}
          value={img}
          placeholder="https://imgur.com"
          type="url"
          name="img"
          pattern="https://.*"
        />
        <input
          onChange={e => this.handleChange(e)}
          value={name}
          placeholder="product name"
          type="text"
          name="name"
        />
        <input
          onChange={e => this.handleChange(e)}
          value={price}
          placeholder="price"
          type="number"
          name="price"
        />
        {saveButton}
        <button onClick={() => this.cancel()} className="cancelAddBtn">
          Cancel
        </button>
      </form>
    );
  }
}
