import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:200px;
height:40px;
border: 1px solid #977123;
margin-bottom:100px;
`

const ButtonStyled = styled.div`
display:flex;
justify-content:center;
align-items:center;
user-select:none;
cursor:pointer;
width:190px;
height:30px;
background-color: #977123 ;
font-family: 'Nunito Sans', sans-serif;
font-size:14px;
font-weight: bold;
text-transform: uppercase;
color:white;
letter-spacing: 2px;
&:hover{
width:200px;
height:40px;
box-shadow: 2px 2px 10px 0px #b7af89;
&:active {
    box-shadow: 0 0 0 0 black;
}
`


export const Button = (props) => {
    return (
        <ButtonContainer>
            <ButtonStyled onClick={() => props.fetchArticles('space')}>{props.title}</ButtonStyled >
        </ButtonContainer >
    )
}