import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0,
            img: ''
        };
        this.add = this.add.bind(this);
        this.baseState = this.state;
    }

    handleChange = e => {
        // console.log('hit function', e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    add = () => {
        let product = { ...this.state };
        // console.log(product);
        this.props.addProduct(product);   
    }
    
    cancel = () => {
        this.setState(this.baseState)
    }

    render(){
        const {name, price, img} = this.state
        return (
            
            <div className='newProduct'>
                <input 
                    onChange={e => this.handleChange(e)} 
                    value={img}
                    placeholder='https://imgur.com' 
                    type='url'
                    name='img'
                    pattern='https://.*'
                   />
                <input 
                    onChange={e => this.handleChange(e)} 
                    value={name}
                    placeholder='product name'
                    type='text'
                    name='name'/>
                <input 
                    onChange={e => this.handleChange(e)} 
                    value={price}
                    placeholder='price'
                    type='number'
                    name='price'/>
                   
                <button 
                    onClick={() => this.add({name, price, img})}
                    className='addProductBtn'>
                        Add to Inventory
                    </button>
                   
                <button
                    onClick={() => this.cancel()}
                    className='cancelAddBtn'
                    >Cancel</button>
            </div>
        )
    }
}