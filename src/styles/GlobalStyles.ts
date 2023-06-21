import { createGlobalStyle } from "styled-components";

interface Props {
    theme: {
        body: string;
        fontColor: string;
    }
}
export const GlobalStyle = createGlobalStyle<Props>`
    body * {
        background-color: ${props => props.theme.body};
        transition: background-color 2s ease; 
        color: ${props => props.theme.fontColor}
    }
`