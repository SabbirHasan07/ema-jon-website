import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import'./Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then (res => res.json())
        .then(data => setProducts(data));

    },[]);
    const handleAddtoCart =(product)=>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-continer'>
            <div className="products-countainer">
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        handleAddtoCart = {handleAddtoCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Products Summary</h3>
                <p>Seclected Items : {cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;