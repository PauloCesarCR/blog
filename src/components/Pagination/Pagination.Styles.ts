import styled from 'styled-components';


export const Nav = styled.nav`

    display:flex;
    justify-content: center;
    align-items: center;

`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
`

export const Li = styled.li`
    display: flex;
    margin: 5px;

    border: 1px solid black;
    padding: 5px;
`

export const a = styled.a`
text-decoration: none;
&:hover {
    color: red;
}
`