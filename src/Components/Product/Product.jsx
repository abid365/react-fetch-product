import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        
        <div className='product-details'>
            <h1 className='brand'>Brand:{props.product.brand} </h1>
            <p className="">Product Name: {props.product.title} </p>
            <p>Catagory: {props.product.category
}</p>
            <img src={props.product.thumbnail} alt="" />
            <div className="pricing-details">
                <p className="">Price: ${props.product.price} </p>
                <small>Discount Price: ${props.product.discountPercentage} </small>
                <p className="">Description: {props.product.description} </p>
            </div>
        </div>
    );
};

export default Product;