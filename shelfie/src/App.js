import React, { Component } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    // updates the state with the products from the database once App finishes loading
    this.getProducts();
  }

  getProducts = () => {
    axios.get("/api/products").then(res => {
      this.setState({
        products: res.data
      });
    });
  };

  newProduct = body => {
    axios
      .post("/api/products", body)
      .then(res => {
        // the res should have the data from the .sql file which should be executing `select * from products` at the end.
        this.setState({
          products: res.data
        });
      })
      .catch(error => console.log(error));
  };

  edit = (id, product) => {
    this.setState({ products: [] });
    axios
      .put(`/api/products?id=${id}`, product)
      .then(res => {
        // the res should have the data from the .sql file which should be executing `select * from products` at the end.
        this.setState({ products: res.data });
      })
      .catch(error => console.log(error));
  };

  delete = id => {
    axios
      .delete(`/api/products/${id}`)
      .then(res => {
        // the res should have the data from the .sql file which should be executing `select * from products` at the end.
        this.setState({ products: res.data });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        {/* Make sure your Router component is wrapping around all your other components so that Links and Routes will work. */}
        <Router>
          <Header />
          <main style={{ padding: 30 }}>
            {/* You use Switch for saying that this section of code will render a component depending on the URL route. */}
            <Switch>
              {/* This route is basically saying at the home URL show the dashboard */}
              <Route exact path="/">
                <Dashboard
                  products={this.state.products}
                  deleteItem={this.delete}
                  editItem={this.edit}
                />
              </Route>
              {/* This route is basically saying at the /add-item url show the add item form */}
              <Route exact path="/add-item">
                <Form addItem={this.newProduct} />
              </Route>
              {/* This route is basically saying at the /edit-item url with an id request param show the edit item form */}
              <Route
                exact
                path="/edit-item/:id"
                render={routeProps => (
                  // passing in routeProps right here allows us to access :id from the url as a variable in the Form component
                  <Form
                    products={this.state.products}
                    editItem={this.edit}
                    routeProps={routeProps}
                  />
                )}
              />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}
