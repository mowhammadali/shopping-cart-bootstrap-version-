import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// styles and icons
import styled from "styled-components/macro";
import {FaTrashAlt} from "react-icons/fa";
import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";

// costum hooks
import { shortener } from '../Hooks/shortener';
import { exist } from '../Hooks/exist';
import {quantity} from "../Hooks/quantity";

// import context
import { CartContext } from './Context/CartContextProvider';

const Product = (props) => {
    const {image , title , price , id} = props;
    const {state: {selectedItems , itemsCounter , checked , total} , dispatch} = useContext(CartContext);
    console.log(selectedItems);
    return (
        <Col className='col-12 col-sm-6 col-md-4 d-flex justify-content-center'>
            <Card className='card p-3 rounded-4 shadow'>
                <Card.Img variant="top" alt="img" src={image} 
                className="image-card rounded-4" />
                <p className='fs-4'>{shortener(title)}</p>
                <p className='h5 mb-3'>{price} $</p>
                <div className='d-flex justify-content-between'>
                    <Link to={`/products/${id}`} className='btn details'>details</Link>
                    {
                        exist(selectedItems , id) 
                        ? 
                        <div className='d-flex gap-2'>
                            {quantity(selectedItems , id) == 1 &&
                            <button className='btn' onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props})}>
                                <FaTrashAlt />
                            </button>
                            }
                            {quantity(selectedItems , id) > 1 &&
                            <button className='btn' onClick={() => dispatch({type: "DECREASE" , payload: props})}>
                                <AiOutlineMinus />
                            </button>
                            }
                            <button className='btn' onClick={() => dispatch({type: "INCREASE" , payload: props})}>
                                <AiOutlinePlus />
                            </button>
                        </div>
                        : 
                        <button className='btn' onClick={() => dispatch({type: "ADD_ITEM" , payload: props})}>Add to Cart</button>
                    }
                </div>
            </Card>
        </Col>
    );
};

const Col = styled.div`
    .card{
        background-color: ${props => props.theme.bgSecondary};
        width: 270px;
    }
    p{
        color: ${props => props.theme.colorPrimary};
    }
    .image-card{
        height: 300px;
    }
    .details{
        background-color: ${props => props.theme.colorPrimary};
        color: ${props => props.theme.bgSecondary};
        border: none;
        &:hover{
            opacity: 0.9;
        }
    }
    .btn{
        color: ${props => props.theme.bgSecondary};
        background-color: ${props => props.theme.colorPrimary};
    }
`

export default Product;