import styled from "styled-components"

import { theme } from "utils/style"



export const DarkBackground = styled.div`
    width: ${prop => prop.width};
    height: ${prop => prop.height};
    background-color: ${prop => prop.backgroundColor};
    position: ${prop => prop.position};
    display: ${prop => prop.display};
    align-items: ${prop => prop.alignItems};
    justify-content: ${prop => prop.justifyContent};
`

DarkBackground.defaultProps = {
  width: "100vw",
  height: "100vh",
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}


export const ModalContainer = styled.div`
    width: ${prop => prop.width};
    background-color: ${prop => prop.backgroundColor};
    border-radius: ${prop => prop.borderRadius};
    padding: ${prop => prop.padding};
    display: ${prop => prop.display};
    flex-direction: ${prop => prop.flexDirection};
    align-items: ${prop => prop.alignItems};
    gap: ${prop => prop.gap};
`

ModalContainer.defaultProps = {
    width: "20rem",
    backgroundColor: `${theme.color.white}`,
    borderRadius: "0.5rem",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem"
}