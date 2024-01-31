import React from 'react'
import styled from "styled-components"

import { logo } from "assets"
import { AuthInput } from "views"
import CloseIcon from '@mui/icons-material/Close';

function LoginModal() {
  return (
    <DarkBackground>
      <Container>
        <CloseBox>
          <CloseIcon style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: "1.2rem" }}/>
        </CloseBox>
        <ImgBox>
          <img src={logo} alt="MelonSpot logo" />
        </ImgBox>
        <InputBox>
          <AuthInput placeholder="아이디"/>
          <AuthInput placeholder="비밀번호"/>
        </InputBox>
        <AuthControlBox>
          <LoginBtn>로그인</LoginBtn>
          <SignUp>회원가입</SignUp>
        </AuthControlBox>
        
      </Container>
    </DarkBackground>
  )
}

export default LoginModal

const DarkBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 20rem;
  background-color: ${prop => prop.theme.color.white};
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const CloseBox = styled.div`
  width: 100%;
  text-align: right;
`

const ImgBox = styled.div`
  width: 80%;
`

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const AuthControlBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`

const LoginBtn = styled.button`
  width: 100%;
  height: 2.5rem;
  color: ${prop => prop.theme.color.white};
  border: none;
  border-radius: 2rem;
  background-color: ${prop => prop.theme.color.secondary};
`

const SignUp = styled.div`
  color: ${prop => prop.theme.font.defaultColor};
  margin: ${prop => prop.theme.gap.sm};
  cursor: pointer;
  border-bottom: 0.09rem solid transparent;
  transition: border-bottom 0.3s ease;
  &:hover {
    border-bottom: 0.09rem solid ${prop => prop.theme.font.defaultColor};
  }
`