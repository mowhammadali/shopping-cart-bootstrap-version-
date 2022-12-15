import React , { useContext } from 'react';

// custom hooks
import { shortener } from '../Hooks/shortener';

// styles and icons
import { Component } from '../Styles/Customs/Cart';
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

// import context
import { ThemeContext } from './Context/ThemeContextProvider';
import { CartContext } from './Context/CartContextProvider';

const Cart = (props) => {
    const {image , title , price , quantity} = props;
    const [dark] = useContext(ThemeContext);
    const {dispatch} = useContext(CartContext);
    return (
        <Component className='p-3 w-100 rounded-3 d-flex justify-content-between align-items-center'>
            <img className='img-fluid rounded-3' alt="cart" src={image}/>
            <section className='text-center'>
                <h4 className='text'>{shortener(title)}</h4>
                <p className='text'>{price}</p>
            </section>
            <span className={`badge ${dark ? "bg-warning text-dark" : "bg-success text-light"}`}>{quantity}</span>
            <section className='d-flex gap-2'>
                {quantity > 1 
                ? <button className='btn' onClick={() => dispatch({type: "DECREASE" , payload: props})}><AiOutlineMinus className='icon'/></button>
                : <button className='btn' onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props})}><FaTrashAlt className='icon'/></button>
                }
                <button className='btn' onClick={() => dispatch({type: "INCREASE" , payload: props})}><AiOutlinePlus className='icon'/></button>
            </section>
        </Component>
    );
};

export default Cart;