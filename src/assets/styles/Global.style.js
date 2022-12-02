import styled from 'styled-components'

export const Button = styled.button`
  width: 400px;
  background-color: ${props => (props.primary ? 'green' : 'black')};
`

export const Container = styled.div`
  max-width: 1300px;
  padding: 0 2rem;
  margin: auto;

  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 8px;
  }
`
