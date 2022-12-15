import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.bgSecondary};
    .text{
        color: ${props => props.theme.colorPrimary};
        @media(max-width: 992px){
            font-size: 14px;
        }
    }
    .action-text{
        color: ${props => props.theme.colorPrimary};
    }
    .btn{
        @media(max-width: 576px){
            font-size: 12px;
        }
    }
`