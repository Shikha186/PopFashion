import React, { useState } from 'react';
import './Product.css';



function clickHandler(){
     
}


function Product(){


    return(

        <div className="product-card">
            <div className="image-container">
                <div className='pimg'></div>
                <div className="badge"  onClick={clickHandler}><i class="fa-regular fa-heart"></i></div>
            </div>
            <h3 className="product-name">White Off-Shoulders Mesh Tassel Top | Karina - Aespa</h3>
            <p className="price"><del>₹2,603.39</del> ₹2,082.71</p>
      </div>
    );

}

export default Product;