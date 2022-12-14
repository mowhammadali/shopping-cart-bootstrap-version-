import React , {useContext} from 'react';

// components
import Product from "./Product";
import Loader from './Loader/Loader';

// styles and icons
import styled from 'styled-components';

// import context
import { ProductContext } from './Context/ProductContextProvider';

const Store = () => {
    const [products , isLoading , error] = useContext(ProductContext);
    return (
        <Container className='mx-0 my-5 px-2 d-flex flex-wrap justify-content-between row gy-5'>
            {error ? <h5 className='error text-center'>{error}</h5> : 
            ( isLoading 
            ?   [{id:1},{id:2},{id:3}].map(item => <Loader key={item.id}/>)
            :   products.map(product => <Product key={product.id} {...product}/>)
            )}
        </Container>
    );
};

const Container = styled.main`
    .loading{
        color: ${({theme}) => theme.colorPrimary};
    }
    .error{
        color: red;
    }
`

export default Store;