import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
font-family: 'Nunito Sans', sans-serif;
text-transform: uppercase;
font-size:14px;
padding:0px 20px 0px 20px;
width:250px;
height:300px;
border:1px solid #977123;
margin-top:100px;
`

export const Card = (props) => {

    return (
        <CardContainer>{props.article}</CardContainer>

    )
}