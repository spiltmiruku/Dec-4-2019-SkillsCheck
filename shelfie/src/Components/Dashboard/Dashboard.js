import React from "react";
import Product from "../Product/Product";

const Dashboard = props => {
  return (
    <div className="dashboard">
      {props.products.map((el, i) => (
        <div key={i} className="products">
          <h2>{el.productName}</h2>
          <img src={el.img} alt="" />
          <h3>${el.price}</h3>
          <div>
            <button>Edit</button>
            <button onClick={() => props.delete(el.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
