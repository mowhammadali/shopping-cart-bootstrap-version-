import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

// styles and icons
import styled from "styled-components/macro";
import {RiShoppingCart2Line} from "react-icons/ri"
import {BsMoonStarsFill} from "react-icons/bs";
import {MdWbSunny} from "react-icons/md";

// import context
import { ThemeContext} from './Context/ThemeContextProvider';

const Navbar = () => {
    const [dark , themeHandler] = useContext(ThemeContext);
    return (
        <Nav className='py-4 px-5 shadow d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-4'>
                <Link to="/products" className='fs-3 fw-bold products-link'>Product</Link>
                <Link to="/shop" className='position-relative'>
                    <RiShoppingCart2Line className='shop-icon'/>
                    <span className='position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill'>0</span>
                </Link>
            </div>
            <div>
                <span onClick={themeHandler} className='rounded rounded-3 p-2 switch-theme d-flex align-items-center'>
                    {dark 
                    ? <MdWbSunny className='theme-icon'/>
                    : <BsMoonStarsFill className='theme-icon'/>
                    }
                </span>
            </div>
        </Nav>
    );
};

const Nav = styled.div`
    background-color: ${props => props.theme.bgSecondary};
    .shop-icon{
        font-size: 2.6rem;
        color: ${props => props.theme.colorPrimary};
    }
    .products-link{
        color: ${props => props.theme.colorPrimary};
    }
    .switch-theme{
        background-color: transparent;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover{
            background-color: ${({theme}) => theme.text};
            opacity: 0.82;
        }
    }
    .theme-icon{
        font-size: 26px;
        color: ${props => props.theme.colorPrimary};
    }
`

export default Navbar;