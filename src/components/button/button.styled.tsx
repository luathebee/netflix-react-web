import styled from "styled-components"

export const Button = styled.button`
    color: ${props => props.theme.palette.typography.primary};
    width: 100%;
    margin 0 0 22px;
    padding: 9px;
    border-radius: 5px;
    border: 0;
    background-color: ${props => props.theme.palette.core.primary};
`