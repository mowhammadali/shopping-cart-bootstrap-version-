import styled from "styled-components";

export const Row = styled.div`
    .details-image{
        width: 300px;
        border-color: ${props => props.theme.bgSecondary} !important;
    }
    h5 , h6 , p{
        color: ${props => props.theme.colorPrimary};
    }
`