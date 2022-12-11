import React, { useEffect, useState } from 'react';
import {Routes , Route , Navigate} from "react-router-dom";

// styles and icons
import { GlobalStyles } from "./Styles/Global/GlobalStyles";
import { ThemeProvider } from 'styled-components';
import {BasicTheme , DarkTheme} from './Styles/Theme/Theme'

// componetns
import Navbar from './Components/Navbar';
import Store from './Components/Store';
import Details from './Components/Details';

// custom hooks
import { useFetch } from './Hooks/useFetch';

// export context
export const ThemeContext = React.createContext();
export const ProductContext = React.createContext();

const App = () => {
    const [darkMode , setDarkMode] = useState(false);
    const handleTheme = () => setDarkMode(!darkMode);
    const data = useFetch("https://fakestoreapi.com/products");
    return (
        <ThemeProvider theme={darkMode ? DarkTheme : BasicTheme}>
            <ThemeContext.Provider value={[darkMode , handleTheme]}>
                <ProductContext.Provider value={data}>
                    <GlobalStyles dark={darkMode}/>
                    <Navbar />
                    <Routes>
                        <Route path='/products' element={<Store />}/>
                        <Route path='/products/:id' element={<Details />}/>
                        <Route path='*' element={<Navigate to="/products" replace/>}/>
                    </Routes>
                </ProductContext.Provider>
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export default App;