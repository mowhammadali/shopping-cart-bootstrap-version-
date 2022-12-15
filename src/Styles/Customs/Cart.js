import styled from "styled-components";

export const Component = styled.div`
    background-color: ${props => props.theme.bgSecondary};
    img{
        height: 140px;
        max-width: 130px;
        @media(max-width:768px){
            height: 90px;
            max-width: 100px;
        }
        @media(max-width:576px){
            height: 60px;
            max-width: 80px;
        }
        @media(max-width:576px){
            height: 50px;
            max-width: 60px;
        }
    }
    .text{
        color: ${props => props.theme.colorPrimary};
        font-size: 18px;
        @media(max-width:768px){
            font-size: 14px;
        }
        @media(max-width:400px){
            font-size: 12px;
        }
    }
    .badge{
        font-size: 18px;
        @media(max-width:768px){
            font-size: 12px;
        }
    }
    .btn{
        color: ${props => props.theme.bgSecondary};
        background-color: ${props => props.theme.colorPrimary};
        @media(max-width:768px){
            padding: 5px 7px !important;
        }
        @media(max-width:400px){
            padding: 2px 4px !important;
        }
    }
    .icon{
        @media(max-width:768px){
            font-size: 12px;
        }
    }
`