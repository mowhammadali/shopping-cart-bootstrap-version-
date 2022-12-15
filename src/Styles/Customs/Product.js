import styled from "styled-components";

export const Col = styled.div`
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