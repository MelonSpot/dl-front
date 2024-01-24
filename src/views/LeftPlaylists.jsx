import React from 'react'
import styled from "styled-components"

import { LeftFavs, LeftDockEntry, SearchInput } from "views"

function LeftPlaylists() {
  return (
    <Container>
      <SearchInput />
      <Playlists>
        <LeftFavs count={999}/>
        <LeftDockEntry>LeftPlayList 02</LeftDockEntry>
        <LeftDockEntry>LeftPlayList 03</LeftDockEntry>
        <LeftDockEntry>LeftPlayList 04</LeftDockEntry>
        <LeftDockEntry>LeftPlayList 05</LeftDockEntry>
        <LeftDockEntry>LeftPlayList 06</LeftDockEntry>
        <LeftDockEntry>LeftPlayList 07</LeftDockEntry>
        <LeftDockEntry>LeftPlayList 08</LeftDockEntry>
        <LeftDockEntry>LeftPlayList 09</LeftDockEntry>
        <LeftDockEntry>LeftPlayList 10</LeftDockEntry>
      </Playlists>
    </Container>
  )
}

export default LeftPlaylists

const Container = styled.div`
  border: 2px solid orange;
`

const Playlists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`