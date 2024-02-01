import React, { useState } from 'react'
import styled, { useTheme } from "styled-components"

import { logo } from "assets"
import { AuthInput } from "views"
import { DarkBackground, ModalContainer } from 'utils/style'
import CloseIcon from '@mui/icons-material/Close';

function SigninModal() {
  const [idCheck, setIdCheck] = useState(false)
  const theme = useTheme()
  return (
    <DarkBackground>
      <ModalContainer>
        <CloseBox>
          <CloseIcon style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: "1.2rem" }}/>
        </CloseBox>
        <ImgBox>
          <img src={logo} alt="MelonSpot logo" />
        </ImgBox>
        <InputBox>
          <AuthInput placeholder="아이디"/>
          <CriteriaGuide color={idCheck ? `${theme.color.primary}` : `${theme.color.warning}`}>아이디는 4~16자 사이로 입력해주세요.</CriteriaGuide>
          <AuthInput placeholder="비밀번호"/>
          <CriteriaGuide color={idCheck ? `${theme.color.primary}` : `${theme.color.warning}`}>8자 이상</CriteriaGuide>
          <CriteriaGuide color={idCheck ? `${theme.color.primary}` : `${theme.color.warning}`}>알파벳 대소문자, 특수문자</CriteriaGuide>
          <AuthInput placeholder="비밀번호 확인"/>
          <CriteriaGuide color={idCheck ? `${theme.color.primary}` : `${theme.color.warning}`}>비밀번호가 일치하지 않습니다.</CriteriaGuide>
        </InputBox>
        <AuthControlBox>
          <LoginBtn>회원가입</LoginBtn>
          <SignUp>로그인</SignUp>
        </AuthControlBox>
        
      </ModalContainer>
    </DarkBackground>
  )
}

export default SigninModal

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

const CriteriaGuide = styled.p`
  color: ${prop => prop.color};
  line-height: 1.2rem;
  font-size: ${prop => prop.theme.font.smSize};
  padding: 0 0.4rem;
`