import styled from 'styled-components';


export const CardContainer = styled.div`
    width: 70%;
    border-bottom: 1px solid black;
    padding: 12px;
    margin: 0 auto;
`
export const CardPostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TitleCard = styled.span`
    color: red; 
    font-size: 32px;  
    text-shadow: 1px 2px 0px rgba(230,211,191,0.39);

    &:hover {
        cursor: pointer;
        color: black;
    }
`

export const infoCard = styled.span`
    font-size: 22px;
    text-transform: capitalize;
`

export const descriptionCard = styled.p`
    font-size: 20px;
    margin-top: 5px;
    max-width: 230ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`