import React from 'react'
import styled from "styled-components"

import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function LeftFavs({ count, clickHandler }) {
  return (
    <Container>
        <Cover>
            <FavoriteOutlinedIcon fontSize='small' sx={{ color: "rgba(72, 209, 102, 1)"}}/>
        </Cover>
        <Texts>
            <b>좋아요 표시한 곡</b>
            <p>{count}곡</p>
        </Texts>
    </Container>
  )
}

export default LeftFavs

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
    background: linear-gradient(135deg,  rgba(72,42,221,1) 0%,rgba(93,67,219,1) 48%,rgba(72,209,102,1) 100%);
    border-radius: 4px;
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > p {
        font-size: 0.8rem;
    }
`