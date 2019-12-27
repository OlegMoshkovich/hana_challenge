import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CardContainer = styled.a`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
font-family: 'Nunito Sans', sans-serif;
font-size:16px;
padding:0px 20px 0px 20px;
width:250px;
height:300px;
border:1px solid #977123;
margin-top:100px;
color:black;
text-decoration:none;
cursor:pointer;
`

export const Card = (props) => {

    return (
        <CardContainer target="_blank" href={props.article.web_url}>{props.article.abstract}</CardContainer>

    )
}
