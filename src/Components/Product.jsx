import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// styles and icons
import styled from "styled-components/macro";

// costum hooks
import { useShortener } from '../Hooks/useShortener';

const Product = ({image , title , price , id}) => {
    return (
        <Col className='col-12 col-sm-6 col-md-4 d-flex justify-content-center'>
            <Card className='card p-3 rounded-4 shadow'>
                <Card.Img variant="top" alt="img" src={image} 
                className="image-card rounded-4" />
                <p className='fs-4'>{useShortener(title)}</p>
                <p className='h5 mb-3'>{price} $</p>
                <div className='d-flex justify-content-between'>
                    <Link to={`/products/${id}`} className='btn details'>details</Link>
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
`

export default Product;