import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

// This component is a functional component.
// It is destructuring the props from its parent component to get id, name, img, etc.

const Product = ({ id, name, img, price, deleteItem }) => (
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

export default Product;
