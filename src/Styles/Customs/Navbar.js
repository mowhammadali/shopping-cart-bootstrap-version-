import styled from "styled-components";

export const Nav = styled.div`
    background-color: ${props => props.theme.bgSecondary};
    .shop-icon{
        font-size: 2.6rem;
        color: ${props => props.theme.colorPrimary};
        @media(max-width:576px){
            font-size: 1.8rem;
        }
    }
    .products-link{
        color: ${props => props.theme.colorPrimary};
        @media(max-width:576px){
            font-size: 20px !important;
        }
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
        @media(max-width:576px){
            font-size: 20px;
        }
    }
`