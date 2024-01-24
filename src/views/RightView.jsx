import React from 'react'
import styled from 'styled-components'

import { RightControls } from "views"
import { setResponsive } from 'utils/style'

function RightView() {
  return (
    <Container>
        <RightControls />
        {/* HomeView */}
        {/* PlaylistView */}
    </Container>
  )
}

export default RightView

const Container = styled.div`
    border: 2px solid rgba(255, 0, 0, 0.6);
    grid-area: main-view;
    ${setResponsive.phone`
        flex: 1;
    `}
`