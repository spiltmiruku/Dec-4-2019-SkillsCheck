import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {

    render(){
        return (
            <div>
                <Product />
                {this.props.products.map((element) => {
                    return {Product}
                })}
              Dashboard
              <Product />
            </div>
        )
    }
}