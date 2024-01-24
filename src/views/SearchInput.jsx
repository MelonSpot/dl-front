import React from 'react'
import styled from "styled-components"

import SearchIcon from "@mui/icons-material/Search"



function SearchInput({ size, radius, children }) {
  return (
    <Container size={size} radius={radius}>
        <SearchIcon />
        <input role="searchbox" maxLength="80" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder={children} aria-hidden="true" />
    </Container>
  )
}

export default SearchInput

const Container = styled.div`
    padding: 4px;
    display: flex;
    align-items: center;
    width: min(368px, 100%);
    height: ${prop => prop.size};
    gap: 4px;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: ${prop => prop.radius};
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