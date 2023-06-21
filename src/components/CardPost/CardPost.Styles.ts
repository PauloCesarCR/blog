import styled from 'styled-components';


export const CardContainer = styled.div`
    width: 70%;
    padding: 12px;
    margin: 10px auto;
    border-radius: 10px;

    @media (max-width: 720px) {
        text-align: center; 
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    border-bottom: 1px solid black;

`
export const CardPostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1030px) {
        display: flex; 
        flex-direction: column;
        gap: 10px;
      }
    
`

export const TitleCard = styled.span`
    color: red; 
    font-size: 32px;  
    text-shadow: 1px 2px 0px rgba(230,211,191,0.39);

    &:hover {
        cursor: pointer;
        color: black;
    }
    @media (max-width: 1030px) {
        text-align: center;
      }


`

export const infoCard = styled.div`
    font-size: 18px;
    text-transform: capitalize;
    background-color: red;
    color: white;
    padding: 6px;
    border-radius: 12px;

    @media (max-width: 1030px) {
        font-size: 15px;    
    }



`

export const descriptionCard = styled.p`
    font-size: 20px;
    margin-top: 5px;
    max-width: 230ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`