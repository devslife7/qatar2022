import styled from 'styled-components'

export const Button = styled.button`
  width: 400px;
  background-color: ${props => (props.primary ? 'green' : 'black')};
`

export const Container = styled.div`
  max-width: 1300px;
  padding: 0 2rem;
  margin: auto;
`
