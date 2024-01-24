import React from 'react'
import styled from "styled-components"

import { SearchInput, RightAuth } from "views"

function RightControls() {
  return (
    <Container>
        <SearchInput size="64px" radius="2rem">어떤 음악을 듣고 싶으신가요?</SearchInput>
        <RightAuth />
    </Container>
  )
}

export default RightControls

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    height: 64px;
    border: 2px solid orange;
`