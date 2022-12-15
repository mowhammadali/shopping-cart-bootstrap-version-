import styled from "styled-components";

export const Container = styled.main`
    .loading{
        color: ${({theme}) => theme.colorPrimary};
    }
    .error{
        color: red;
    }
`