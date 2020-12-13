import React, {useState, createContext } from 'react';


export const AppContext  = createContext();


export const AppProvider = props =>{

    const [category, setCategory] = useState({id: 1, name:'Laptops'});
    
    return (
      <AppContext.Provider value={[category, setCategory]} >
          {props.children}
      </AppContext.Provider>
    )
  }