import React, { Component } from 'react';

const shoppingURL = 'http://localhost:3301';
    

class ProductDetail extends Component {

    state = {
        productDetails: null
     };

    componentDidMount(){
        this.fetchProductDetail(this.props.match.params);
    }
    
    async fetchProductDetail (obj){
            try {
               const data = await fetch(`${shoppingURL}/productDetails?categoryId=${obj.catId}&id=${obj.id}`);
               const productDetails = await data.json();
               debugger;
               this.setState({ productDetails });
            }
            catch(error) {
                console.log(error);
            }
    }    

    render() {
         const { productDetails } = this.state;
         if (productDetails === null) {
           return <h2>Loading Product Details...</h2>;
         }

         if( !productDetails || productDetails.length < 1){
             return (
                 <h1> No data to display</h1>
             )
         }
        return (
            
            <div className="product_details">
                <h2>Product Details Page</h2>                
                <h3>{ productDetails[0].name }</h3>                    
                   <div style={{ width: '500px', margin:'0 auto', color: '#333' }}>
                   <img src={`${process.env.PUBLIC_URL}/${productDetails[0].imageUrl}`} width="280px" height="280px" />    
                   <pre dangerouslySetInnerHTML={ {__html: productDetails[0].description} } ></pre>
                 </div>
               
            </div>
        )
    }
}

export default ProductDetail
