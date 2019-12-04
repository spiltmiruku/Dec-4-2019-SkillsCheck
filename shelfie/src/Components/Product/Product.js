import React, {Component} from 'react';

export default class Product extends Component {

    render(props){
        return (
            <div>
                {this.props.products}
                Product
            </div>
        )
    }
}