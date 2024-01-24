import React from 'react'
import styled from "styled-components"

import { LeftDockEntry } from "views"
import { setResponsive } from 'utils/style'

function LeftDock() {
  return (
    <Container>
      <LeftDockEntry>LeftDockEntry</LeftDockEntry>
    </Container>
  )
}

export default LeftDock

const Container = styled.div`
    width: 100%;
    border: 2px solid rgba(255, 0, 0, 0.6);
    grid-area: left-sidebar;
    grid-template-rows: 1fr auto;
    ${setResponsive.phone`
        display: none;
    `}
`