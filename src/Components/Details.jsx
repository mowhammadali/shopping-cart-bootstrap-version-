import React , { useContext } from 'react';
import { Link , useParams } from 'react-router-dom';
import styled from 'styled-components';

// import context
import {ProductContext} from "../App";
import {ThemeContext} from "../App";

const Details = () => {
    const params = useParams();
    const [data] = useContext(ProductContext);
    const [dark] = useContext(ThemeContext);
    const matchData = data.find(item => item.id == params.id);
    const {title , description , price , category , image} = matchData;
    return (
        <Row className='row row-cols-1 gy-5 gy-md-0 row-cols-md-2 my-5 mx-0 px-5 justify-content-between'>
            <div className='col text-center'>
                <img className='img-fluid details-image rounded-4 border border-5 shadow' alt="detail" src={image}/>
            </div>
            <div className='col align-self-center'>
                <h5>{title}</h5>
                <p className='my-4'>{description}</p>
                <h6 className='mb-4'><span className={`${dark ? "text-warning" : "text-danger"}`}>Category</span>: {category}</h6>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className={`badge py-2 px-4 fs-5 ${dark ? "text-bg-success": "text-bg-dark"}`}>{price} $</span>
                    <Link to="/products" className={`fw-bold btn ${dark ? "btn-warning" : "btn-danger"}`}>Back to Store</Link>
                </div>
            </div>
        </Row>
    );
};

const Row = styled.div`
    .details-image{
        width: 300px;
        border-color: ${props => props.theme.bgSecondary} !important;
    }
    h5 , h6 , p{
        color: ${props => props.theme.colorPrimary};
    }
`

export default Details;