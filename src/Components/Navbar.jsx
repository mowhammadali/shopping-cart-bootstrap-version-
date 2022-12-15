import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

// styles and icons
import {Nav} from "../Styles/Customs/Navbar";
import {RiShoppingCart2Line} from "react-icons/ri"
import {BsMoonStarsFill} from "react-icons/bs";
import {MdWbSunny} from "react-icons/md";

// import context
import { ThemeContext} from './Context/ThemeContextProvider';
import { CartContext } from './Context/CartContextProvider';

const Navbar = () => {
    const [dark , themeHandler] = useContext(ThemeContext);
    const {state: {itemsCounter}} = useContext(CartContext);
    return (
        <Nav className='py-4 px-3 px-sm-5 shadow d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-4'>
                <Link to="/products" className='fs-3 fw-bold text-decoration-underline products-link'>Product</Link>
                <Link to="/cart" className='position-relative'>
                    <RiShoppingCart2Line className='shop-icon'/>
                    <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${dark ? "bg-warning text-dark" : "bg-success"}`}>
                        {itemsCounter}
                    </span>
                </Link>
            </div>
            <div>
                <span onClick={themeHandler} className='rounded rounded-3 p-2 switch-theme d-flex align-items-center'>
                    { dark 
                    ? <MdWbSunny className='theme-icon'/>
                    : <BsMoonStarsFill className='theme-icon'/>
                    }
                </span>
            </div>
        </Nav>
    );
};

export default Navbar;