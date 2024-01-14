import React from "react"
import styled from "styled-components"

import { mediaSizes } from 'utils/style'

function MelonSpot({data}) {
    return (
        <Container>
            
        </Container>
    )
}



const Container = styled.div`
    width: 100vw;
    min-width: ${mediaSizes.tablet};
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    height: 100%;
    min-height: 100%;
    grid-template-areas: 
                    "left-sidebar main-view right-sidebar"
                    "now-playing-bar now-playing-bar now-playing-bar";

    ${mediaSizes.mobile`
        display: flex;
        flex-direction: column;
    `}
`