import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.button`
  width: 300px;
  height: 60px;
  color: var(--color-primary);
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;

  display: inline-block;
  background-color: #fff;
  font-size: 1.3rem;
  font-weight: 550;
  border-radius: 6px;
  border: 2px solid var(--color-primary);

  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #fff;
    background: none;
    border-color: #fff;
  }

  ${props => {
    if (props.variant === 'primary') {
      return css`
        background-color: red;
        color: white;
        border-radius: 10px;
      `
    }
    if (props.variant === 'secondary') {
      return css`
        background-color: pink;
        color: white;
        border-radius: 20px;
      `
    }
    if (props.disabled) {
      return css`
        background-color: gray;
        border-color: black;
        color: black;
        &:hover {
          color: black;
          background: gray;
          border-color: black;
        }
      `
    }
  }}
`
