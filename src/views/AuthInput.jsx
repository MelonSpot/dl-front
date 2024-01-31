import React from 'react'
import styled from "styled-components"

function AuthInput({ placeholder }) {
  return (
    <Input placeholder={placeholder}/>
  )
}

export default AuthInput

const Input = styled.input`
    width: inherit;
    height: 2.5rem;
    background-color: rgba(0, 0, 0, 0.1);
    color: ${prop => prop.theme.font.defaultColor};
    font-size: 0.9rem;
    padding: 0.5rem;
    border: none;
    border-radius: ${prop => prop.theme.radius.sm};
    outline: none;
`