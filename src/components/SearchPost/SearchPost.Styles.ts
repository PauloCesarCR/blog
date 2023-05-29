import styled from "styled-components";


export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 20px;
`
export const InputSearch = styled.input<{themeSearch: string;}>`
    width: 50%;
    height: 40px;
    padding: 5px;
    background-color: ${props => props.themeSearch};
    border-radius: 5px;
    color:  ${props => props.themeSearch == "white" ? "black" : "white"};
`