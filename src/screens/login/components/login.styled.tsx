import { Grid } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
    min-height: 100vh;
    background-color: #1A1A1A;

`;

export const Input = styled.input`
    width: 100%;
    margin 0 0 22px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #E0E0E0;
`;

export const Button = styled.button`
    color: #FFF;
    width: 100%;
    margin 0 0 22px;
    padding: 9px;
    border-radius: 5px;
    border: 0;
    background-color: #E31A13;
`

export const Error = styled.p`
    color: #E31A13;
    font-weight: 800;

`