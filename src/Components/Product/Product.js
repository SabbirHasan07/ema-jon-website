import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name , img ,seller,price,ratings} =(props.product);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price : {price} Taka(Only).</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings} Stars</small></p>
            </div>
            <button onClick={ ()=> props.handleAddtoCart(props.Product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;