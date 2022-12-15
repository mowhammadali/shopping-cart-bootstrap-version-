import React from 'react';
import {Routes , Route , Navigate} from "react-router-dom";

// context provider
import CartContextProvider from './Components/Context/CartContextProvider';
import ProductContextProvider from './Components/Context/ProductContextProvider';
import ThemeContextProvider from './Components/Context/ThemeContextProvider';

// styles and icons
import { GlobalStyles } from "./Styles/Global/GlobalStyles";

// componetns
import Navbar from './Components/Navbar';
import Store from './Components/Store';
import Details from './Components/Details';
import ShopCart from './Components/ShopCart';

const App = () => {
    return (
        <ThemeContextProvider>
            <ProductContextProvider>
                <CartContextProvider>
                    <GlobalStyles />
                    <Navbar />
                    <Routes>
                        <Route path='/products' element={<Store />}/>
                        <Route path='/products/:id' element={<Details />}/>
                        <Route path='/cart' element={<ShopCart />}/>
                        <Route path='*' element={<Navigate to="/products" replace/>}/>
                    </Routes>
                </CartContextProvider>
            </ProductContextProvider>
        </ThemeContextProvider>
    );
};

export default App;