import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';



export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        products: [{
          url: props.obj.img,
          productName: props.obj.name,
          price: props.obj.price
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

  newProduct = () => {
    axios.post('/api/products', body).then(res => {
      console.log(res.data)
        this.setState({
          products: res.data
        })
    })
  }

  edit = () => {
    let product = { ...this.state };
    delete product.isEditing

  }


  // delete



  render(){
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
  
      </div>
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