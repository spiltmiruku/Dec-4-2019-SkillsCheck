import React, {Component} from 'react';

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            url: '',
            productName: '',
            price: undefined
        };
        this.add = this.add.bind(this);
    }

    handleChange = e => {
        // console.log('hit function', e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    add() {
        let product = { ...this.state };
        // console.log(product);
        this.props.addProduct(product);
    }

    cancel(e) {
        e.preventDefault()
        this.setState(this.state);
    }

    render(){
        const {url, productName, price} = this.state
        return (
            
            <div className='newProduct'>
                <input 
                    onChange={e => this.handleChange(e)} 
                    value={url}
                    placeholder='https://imgur.com' 
                    type='url'
                    name='url'
                    pattern='https://.*'
                   />
                <input 
                    onChange={e => this.handleChange(e)} 
                    value={productName}
                    placeholder='product name'
                    type='text'
                    name='productName'/>
                <input 
                    onChange={e => this.handleChange(e)} 
                    value={price}
                    placeholder='price'
                    type='number'
                    name='price'/>
                <button 
                    onClick={() => this.add({url, productName, price})}
                    className='addProductBtn'>
                        Add to Inventory
                    </button>
                <button
                    onClick={() => this.cancel({url, productName, price})}
                    className='cancelAddBtn'
                    >Cancel</button>
            </div>
        )
    }
}