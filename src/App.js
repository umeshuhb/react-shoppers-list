import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/Product/ProductDetail';
import {AppProvider} from './components/AppContext';

import './App.css';

const path = '/react-shoppers-list';

function App() {

  return (
    <div className="App">
      <AppProvider>
      <Router>
          <Route exact path={`${path}/`} component={Home} />
          { <Route path={`${path}/:catId/:id`} component={ProductDetail}  /> }
      </Router>
      </AppProvider>
    </div>
  );
}

export default App;
