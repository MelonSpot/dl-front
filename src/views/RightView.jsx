import React from 'react'
import styled from 'styled-components'

import { RightControls, HomeView } from "views"
import { setResponsive } from 'utils/style'

function RightView() {
  return (
    <Container>
        <RightControls />
        <HomeView />
        {/* PlaylistView */}
    </Container>
  )
}

export default RightView

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    border: 2px solid rgba(255, 0, 0, 0.6);
    grid-area: main-view;
    ${setResponsive.phone`
        flex: 1;
    `}
`