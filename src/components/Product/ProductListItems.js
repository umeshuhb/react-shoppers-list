import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css';


function ProductListItems({itemDetail}) {
    const path = '/react-shoppers-list';

    return (
       
        <div className="product">
            <Link to={`${path}/${itemDetail.categoryId}/${itemDetail.id}`}>
                {itemDetail.name} 
                <img src={`${process.env.PUBLIC_URL}/${itemDetail.imageUrl}`} width='100px' height='100px' />                
            </Link>
        </div>
    
    )
}

export default ProductListItems
