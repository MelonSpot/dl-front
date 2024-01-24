import React from 'react'
import styled from "styled-components"

import { LeftDockEntry } from "views"

function LeftControls() {
  return (
    <Container>
      <LeftDockEntry>Left Controls</LeftDockEntry>
    </Container>
  )
}

export default LeftControls

const Container = styled.div`
    border: 2px solid orange;
`