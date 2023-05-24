import styled from "styled-components";

export const PostContainer = styled.div`
width: 100%;
height: 100%;
position: relative;

`
export const Post= styled.div`
display: flex;
justify-content: center;
align-items: center;

`
export const PostDetails = styled.div`
position: relative;
width: 1300px;
display: flex;
flex-direction: column;
top: 25px;
align-items: center ;
gap: 20px;
`
export const PostTitle = styled.h1`
font-size:46px;
font-style: bold;
color: red;
`
export const PostDescription = styled.p`
font-size: 24px;
text-align: center;
`
export const PostImage = styled.img`
max-width: 100%;
`
export const ImageDescription = styled(PostDescription)``

export const PostWriter = styled.span`
margin-bottom: 20px;
`

