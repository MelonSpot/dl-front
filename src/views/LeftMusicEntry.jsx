import React from 'react'
import styled from "styled-components"

function LeftMusicEntry({ cover, title, artist }) {
  return (
    <Container>
        <Cover src={cover} />
        <Texts>
            <b>{title}</b>
            <p>{artist}</p>
        </Texts>
    </Container>
  )
}

export default LeftMusicEntry

const Container = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    max-width: 400px;
    min-width: 50px;
    height: 50px;
    font-size: 0.9rem;
`

const Cover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${props => props.src};
    border-radius: 4px;
    border: 1px solid lightgray;
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > p {
        font-size: 0.8rem;
    }
`