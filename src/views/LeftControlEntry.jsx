import React from 'react'
import styled from "styled-components"

function LeftControlEntry({ icon, clickHandler, children }) {
  return (
    <Container>
        { icon }
        { children }
    </Container>
  )
}

export default LeftControlEntry

const Container = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    max-width: 400px;
    min-width: 50px;
    height: 50px;
    border: 2px solid gray;
    font-size: 0.9rem;
`