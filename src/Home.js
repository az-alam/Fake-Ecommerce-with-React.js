import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Cart from './Cart';


export const ecommerceContext=createContext({})

function Home() {
    const [cart, setCart]=useState(
    JSON.parse(localStorage.getItem("product")!==null)? JSON.parse(localStorage.getItem("product")):[]

    )
    
    return (
       <>
       <ecommerceContext.Provider value={{cart, setCart}}>
       <BrowserRouter>
       <Header />
       <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
       </Routes>
       </BrowserRouter>
       </ecommerceContext.Provider>
       </>
    )
}

export default Home

