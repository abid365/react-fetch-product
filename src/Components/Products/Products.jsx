import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products))
    } ,[])
    return (
        <div>
            <h1>Phone List:{products.length} </h1>
            <div className="grid">
                {
                    products.map(product=> <Product product={product}
                    key={product.id}>

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;