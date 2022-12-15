import React , {useContext} from 'react';
import Alert from '@mui/material/Alert';

// components
import Product from "./Product";
import Loader from './Loader/Loader';

// styles and icons
import {Container} from "../Styles/Customs/Store";

// import context
import { ProductContext } from './Context/ProductContextProvider';

// skeleton array
const skeletons = [];
for(let i = 1; i < 21; i++){
    skeletons.push({id: i})
}

const Store = () => {
    const [products , isLoading , error] = useContext(ProductContext);
    return (
        <Container className='mx-0 my-5 px-2 d-flex flex-wrap justify-content-between row gy-5'>
            {error ? 
            <Alert variant="filled" severity="error" className='mx-auto w-75 d-flex justify-content-center'>
                {error}
            </Alert>
            : ( isLoading 
            ?   skeletons.map(item => <Loader key={item.id}/>)
            :   products.map(product => <Product key={product.id} {...product}/>)
            )}
        </Container>
    );
};

export default Store;