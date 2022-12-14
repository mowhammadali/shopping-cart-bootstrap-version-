import React from 'react';

// custom hooks
import { useFetch } from '../../Hooks/useFetch';

export const ProductContext = React.createContext();

const ProductContextProvider = ({children}) => {
    const data = useFetch("https://fakestoreapi.com/products");
    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;