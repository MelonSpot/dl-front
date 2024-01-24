import React from 'react'
import styled from "styled-components"

import { LeftControlEntry } from "views"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function LeftControls() {
  return (
    <Container>
      <LeftControlEntry icon={ <HomeOutlinedIcon /> }>홈</LeftControlEntry>
    </Container>
  )
}

export default LeftControls

const Container = styled.div`
    border: 2px solid orange;
    :hover {
      background: rgba(255, 255, 255, 0.1);
    }
`