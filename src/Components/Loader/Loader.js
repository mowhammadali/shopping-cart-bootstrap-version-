import React from 'react';
import { Card } from 'react-bootstrap';
import Skeleton from '@mui/material/Skeleton';

// styles
import styled from 'styled-components';

const Loader = () => {
    return (
        <Col className='col-12 col-sm-6 col-md-4 d-flex justify-content-center'>
            <Card className="card p-3 rounded-4 shadow" style={{width: "270px"}}>
                <Skeleton className='skeleton rounded-4' animation="wave" variant="rounded" width="100%" height={300} />
                <Skeleton className='skeleton my-3' animation="wave" variant="rounded" width="60%" height={24} />
                <Skeleton className='skeleton mb-3' animation="wave" variant="rounded" width="30%" height={24} />
                <Skeleton className='skeleton' animation="wave" variant="rounded" width="100%" height={32} />
            </Card>
        </Col>
    );
};

const Col = styled.div`
    .card{
        background-color: ${props => props.theme.bgSecondary};
    }
    .skeleton{
        background-color: ${props => props.theme.skeletonPrimary};
    }
`

export default Loader;