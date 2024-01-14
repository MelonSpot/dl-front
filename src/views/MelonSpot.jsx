import React from "react"
import styled from "styled-components"

import { setResponsive, mediaSizes } from 'utils/style'


function MelonSpot({data}) {
    return (
        <Container>

        </Container>
    )
}

export default MelonSpot



const Container = styled.div`
    border: 2px solid rgba(0, 0, 0, 1);
    width: 100vw;
    min-width: ${mediaSizes.tablet}px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    height: 100%;
    min-height: 100%;
    grid-template-areas: 
                    "left-sidebar main-view right-sidebar"
                    "now-playing-bar now-playing-bar now-playing-bar";

    ${setResponsive.phone`
        display: flex;
        flex-direction: column;
    `}
`