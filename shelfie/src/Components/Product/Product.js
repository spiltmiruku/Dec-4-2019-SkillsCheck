import React, {Component} from 'react';

export default class Product extends Component {
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

      handleChange = e => {
          this.setState({
              [e.target.name]: e.target.value
          });
      };

    edit = (id) => {
        let product = { ...this.state };
        delete product.isEditing;
        this.props.edit(id, product);
        this.setState({
         isEditing: false
    });
  };


    render(props){
        console.log(this.state);
        let {
            product: [
                {
                    url,
                    productName,
                    price
                }
            ] 
        } = this.state;

        return (
            <section className='productContainer'>

                {this.state.isEditing ? (
                <div className='addProduct'>
                    <input 
                        onChange={this.handleChange} 
                        value={url}
                        type='url'
                        name='url'
                        pattern='https://.*'
                    />
                    <input 
                        onChange={this.handleChange} 
                        value={productName}
                        type='text'
                        name='productName'/>
                    <input 
                        onChange={this.handleChange} 
                        value={price}
                        type='number'
                        name='price'/>
                    <button 
                        className='editButton'
                        onClick={() => this.edit(this.props.obj.id)}>
                            {" "}
                            Save Edits {" "}
                    </button>
                    </div>
                ) : (
            <div className='productContainer'>
                <div>{url}</div>
                <div>{productName}</div>
                <div>{price}</div>
                <button
                    className='editButton'
                    onClick={() => this.setState({ isEditing: true })}>
                        {" "}
                        Edit {" "}
                </button>
                <button
                    className='editButton'
                    onClick={() => this.props.delete(this.props.obj.id)}>
                        {" "}
                        Delete {" "}
                </button>
                </div>
                )}
                </section>
        );
    }
}