import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

// styles
import { Container } from '../Styles/Customs/Factor';

// import context
import { ThemeContext } from './Context/ThemeContextProvider';
import { CartContext } from './Context/CartContextProvider';

const Factor = () => {
    const [dark] = useContext(ThemeContext);
    const {state: {checkout , total , itemsCounter} , dispatch} = useContext(CartContext);
    return (
        <>
            {itemsCounter > 0 &&
                <Container className='p-3 rounded-4'>
                    <p className='text'>Total Items: {itemsCounter}</p>
                    <p className='text mb-5'>Total Payments: {total}</p>
                    <div className='d-flex justify-content-between'>
                        <button className={`btn ${dark ? "bg-warning" : "bg-success text-light"}`}
                        onClick={() => dispatch({type: "CLEAR"})}>
                            Clear
                        </button>
                        <button className={`btn ${dark ? "bg-warning" : "bg-success text-light"}`}
                        onClick={() => dispatch({type: "CHECKOUT"})}>
                            CheckOut
                        </button>
                    </div>
                </Container>
            }
            {checkout &&
                <Container className='p-3 rounded-4 text-center'>
                    <p className='action-text h4 mb-4'>Check Out Successfully</p>
                    <button className={`btn ${dark ? "bg-warning" : "bg-success"}`}>
                        <Link className={`${dark ? "text-dark" : "text-light"}`} to="/products">Buy More</Link>
                    </button>
                </Container>
            }
            {!checkout && !itemsCounter &&
                <Container className='p-3 rounded-4 text-center'>
                    <p className='action-text h4 mb-4'>Want to Buy ?</p>
                    <button className={`btn ${dark ? "bg-warning" : "bg-success"}`}>
                        <Link className={`${dark ? "text-dark" : "text-light"}`} to="/products">Go to Shop</Link>
                    </button>
                 </Container>
            }
        </>
    );
};

export default Factor;