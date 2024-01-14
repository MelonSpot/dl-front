import { css } from "styled-components"
export const mediaSizes = {
    desktop: 1024,
    tablet: 768,
    phone: 576
}

export const setResponsive = Object.keys(mediaSizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${mediaSizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})