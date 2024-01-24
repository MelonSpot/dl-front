import React from 'react'
import styled from "styled-components"

import { LeftFavs, LeftMusicEntry, SearchInput } from "views"

function LeftPlaylists() {
  return (
    <Container>
      <SearchInput size="32px" radius="none">플레이 기록에서 검색</SearchInput>
      <Playlists>
        <LeftFavs count={999}/>
        <LeftMusicEntry title={"예시 타이틀 01"} artist={"artist unknown"}/>
        <LeftMusicEntry title={"예시 타이틀 02"} artist={"artist unknown"}/>
        <LeftMusicEntry title={"예시 타이틀 03"} artist={"artist unknown"}/>
        <LeftMusicEntry title={"예시 타이틀 04"} artist={"artist unknown"}/>
        <LeftMusicEntry title={"예시 타이틀 05"} artist={"artist unknown"}/>
        <LeftMusicEntry title={"예시 타이틀 06"} artist={"artist unknown"}/>
        <LeftMusicEntry title={"예시 타이틀 07"} artist={"artist unknown"}/>
        <LeftMusicEntry title={"예시 타이틀 08"} artist={"artist unknown"}/>
        <LeftMusicEntry title={"예시 타이틀 09"} artist={"artist unknown"}/>
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