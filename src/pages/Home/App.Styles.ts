import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme};
`;
const moveAndBlink = keyframes`
    0%, 100% {
        left:10px;
        opacity: 0;
    }
    50% {
        left: calc(90%);
        opacity: 1;
    }
`
export const h1 = styled.h1`

    position: absolute;
    left: -100px;
    color: red;
    top: 45px; 
    font-size: 24px;
    animation: ${moveAndBlink} 5s linear infinite;

`