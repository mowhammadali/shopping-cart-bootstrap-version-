import React , {useContext} from 'react';

// components
import Cart from './Cart';
import Factor from './Factor';

// import context
import { CartContext } from './Context/CartContextProvider';

const ShopCart = () => {
    const {state} = useContext(CartContext);
    return (
        <div className='row mt-5 mb-3 mx-0 px-1 px-md-4'>
            <section className='col-12 col-md-8 p-3 d-flex flex-column gap-4'>
                {state.selectedItems.map(item => <Cart key={item.id} {...item}/>)}
            </section>
            <section className='col-12 col-md-4 p-3'>
                <Factor />
            </section>
        </div>
    );
};

export default ShopCart;