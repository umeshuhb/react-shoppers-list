import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

//const shoppingURL = 'http://localhost:3001';
const shoppingURL = 'https://my-json-server.typicode.com/umeshuhb/shoppers-list-db';
      
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
               this.setState({ productDetails });
            }
            catch(error) {
                console.log(error);
            }
    }
    
    goBack(){
        this.props.history.goBack();
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
                <div className="header">
                    <Button variant="contained" color="primary" onClick={this.goBack.bind(this)}>
                        <ChevronLeftIcon/> <span className="textButton">Back</span>
                    </Button>
                    <h2>{ productDetails[0].name }</h2>          
                </div>                                 
                <div style={{ width: '500px', margin:'20px auto', color: '#333' }}>
                    <img src={`${process.env.PUBLIC_URL}/${productDetails[0].imageUrl}`} width="280px" height="280px" />    
                    <pre dangerouslySetInnerHTML={ {__html: productDetails[0].description} } ></pre>
                </div>
               
            </div>
        )
    }
}

export default ProductDetail;