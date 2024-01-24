import React from 'react'
import styled from "styled-components"

import SearchIcon from "@mui/icons-material/Search"



function SearchInput() {
  return (
    <Container>
        <SearchIcon />
        <input role="searchbox" maxLength="80" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="플레이 기록에서 검색" aria-hidden="true" />
    </Container>
  )
}

export default SearchInput

const Container = styled.div`
    padding: 4px;
    display: flex;
    align-items: center;
    max-width: 400px;
    min-width: 100%;
    height: 32px;
    gap: 4px;
    > input {
        cursor: text;
        background-color: transparent;
        border: none;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.8);
    }
    > input:focus {
        outline: none;
    }
`