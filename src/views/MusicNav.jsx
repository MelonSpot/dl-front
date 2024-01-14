import React from 'react'
import styled from 'styled-components'

import { setResponsive } from 'utils/style'

function MusicNav() {
  return (
    <Container>
        MusicNav
    </Container>
  )
}

export default MusicNav

const Container = styled.div`
    border: 2px solid rgba(255, 0, 0, 0.6);
    grid-area: now-playing-bar;
    height: 72px;
    ${setResponsive.phone`
        flex: 1;
    `}
`