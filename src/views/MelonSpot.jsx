import React from "react"
import styled from "styled-components"

import { setResponsive } from 'utils/style'
import { LeftDock, RightView, MusicNav } from "views"


function MelonSpot({data}) {
    return (
        <Container>
            <LeftDock />
            <RightView />
            <MusicNav />
        </Container>
    )
}

export default MelonSpot



const Container = styled.div`
    border: 2px solid rgba(0, 0, 0, 1);
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: 
                    "left-sidebar main-view"
                    "now-playing-bar now-playing-bar";
    gap: 8px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.9);
    color: rgba(255, 255, 255, 0.6);
    ${setResponsive.phone`
        display: flex;
        flex-direction: column;
        min-width: 320px;
        min-height: 650px;
    `}
`