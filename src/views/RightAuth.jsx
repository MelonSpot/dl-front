import React from 'react'
import styled from "styled-components"

function RightAuth({ isLoggedIn, cover, clickHandler }) {

  return (
    <Container onClick={clickHandler}>
        <Cover />
    </Container>
  )
}

export default RightAuth

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;
`

const Cover = styled.div`
    border-radius: 50%;
    width: calc(100% * 0.75);
    height: calc(100% * 0.75);
    border: 1px solid lightgray;
`