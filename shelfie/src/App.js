import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import {HashRouter, Link} from'react-router-dom';
import routes from './routes';


export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        products: [{
          name: props.name,
          price: props.price,
          img: props.img

        }],
        isEditing: false
      }
  }

  componentDidMount(){
    this.getProducts()
  }

  getProducts = () => {
    axios.get('/api/products').then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  newProduct = (body) => {
    console.log('hit new product', body)
    axios.post('/api/products', body)
    .then(res => {
      console.log(res.data)
        this.setState({
          products: res.data
        })
    })
    .catch(error => console.log(error))
  }


  edit = (id, product) => {
    axios.put(`/api/products?id=${id}`, product)
    .then(res => {
      this.setState({ products: res.data })
    })
    .catch(error => console.log(error))
  }

  delete = (id) => {
    axios.delete(`/api/products/${id}`)
    .then(res => {
      this.setState({ products: res.data });
    })
    .catch(error => console.log(error))
  }


  render(){
    return (
      <HashRouter>
      <div className="App">
        <Dashboard products={this.state.products} deleteProduct={this.delete} />
        <Form />
        <Header />
        <Link to='/' className='link'>Home</Link>
        {/* <Link to='/add'></Link>
        <Link to='edit/:id'></Link> */}

  {routes}
      </div>
      </HashRouter>
    );
  }

}




// {
          //   id: 1,
          //   url: 'https://img2.cgtrader.com/items/1020700/8f3b497f77/meeseeks-box-rick-and-morty-3d-model-obj-mtl-3ds-stl-blend.jpg',
          //   productName: 'Mr. Meeseeks Box',
          //   price: 1000
          // },
          // {
          //   id: 2,
          //   url: 'https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/5898152ee96db8a6c3fcaab5c5f9827b/large.JPG',
          //   productName: 'Microverse Battery',
          //   price: 849
          // },
          // {
          //   id: 3,
          //     url: 'https://images-na.ssl-images-amazon.com/images/I/41ZNeN26AoL._SY450_.jpg',
          //     productName: 'Portal Gun',
          //     price: 9999
          // }