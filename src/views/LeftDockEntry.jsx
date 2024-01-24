import React from 'react'
import styled from 'styled-components'

function LeftDockEntry({ icon, clickHandler, children }) {
  return (
    <Container>{children}</Container>
  )
}

export default LeftDockEntry


const Container = styled.div`
    max-width: 400px;
    min-width: 50px;
    height: 50px;
    border: 2px solid gray;
`