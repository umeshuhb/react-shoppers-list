import React, {useEffect, useContext, useState } from 'react';
import ProductListItems from './Product/ProductListItems';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { AppContext } from './AppContext';

const Home = (props)=>{   

    const [categories, setCategories] = useState([{
        category : {}
    }]);

    const [category,setCategory] = useContext(AppContext);

    const [products, setProducts] = useState([{
      product : {}
    }]);
    

    useEffect( ()=> {
        fetchCategories();
    }, []);

    useEffect( ()=> {
      fetchProducts();
    }, [category]);


    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    
      const classes = useStyles();   
    
      const handleChange = (event) => {    
        const name = categories.filter( (category) => {
            return category.id === event.target.value;
          })[0].name; 
          
        setCategory( { id: event.target.value, name: name } );             
        
       };

    //const shoppingURL = 'http://localhost:3001';
    const shoppingURL = 'https://my-json-server.typicode.com/umeshuhb/shoppers-list-db';
   

    const fetchProducts = async()=> {
      try {
         const data = await fetch(`${shoppingURL}/products?categoryId=${category.id}`);
         const products = await data.json();
         setProducts(products);
      }
      catch(error) {
          console.log(error);
      }
  };

    const fetchCategories = async()=> {
        try {
           // const data = await fetch(`${shoppingURL}?q=${match.params.id}`);
           const data = await fetch(`${shoppingURL}/categories`);
           const categories = await data.json();
           setCategories(categories);
        }
        catch(error) {
            console.log(error);
        }
    };
    

    return (
      <div>            

        <FormControl className={classes.formControl}>
            
       Category :     <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category.id}        
            onChange={handleChange}
            >
                {categories.map( (item, idx) =>(
                      <MenuItem key={idx} value={item.id}>{item.name}</MenuItem>
                  ))}
            
            </Select>
        </FormControl> 

        <div className="flex-container">
          {products.map( (product, idx) =>(

                 <ProductListItems key={idx} itemDetail={product} /> 

          ))}
        </div>
      </div>

    )
   
}

export default Home
