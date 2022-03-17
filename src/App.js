import React from 'react'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Banner from './components/banner/Banner'
import {data} from './components/products/data/ProductData'

function App() {
  return (
   <>
    <Banner/>
    <Header/>
    <Products data={data}/>
   </>
  );
}

export default App;
