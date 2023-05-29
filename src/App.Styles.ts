import styled from 'styled-components';     

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme};
`;

export const Title = styled.h1`
    color: red;
`

export const ToogleTheme = styled.img`
    margin: 0 auto;
    width: 30px;
    position: absolute;
    right: 0; 
    left: 0;
    top: 10px;

    &:hover {
        opacity : 0.75;
        cursor: pointer;
    }
`