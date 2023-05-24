import { createGlobalStyle } from "styled-components";

interface Props {
    theme: {
        body: string;
        fontColor: string;
    }
}
export const GlobalStyle = createGlobalStyle<Props>`
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor}
    }
`