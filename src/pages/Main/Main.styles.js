import styled from 'styled-components'
import background from '../../assets/img/qatarstatic.png'
import backgroundLocation from '../../assets/img/qatarhomepage.png'

export const HomeWrapper = styled.section`
  background: url(${backgroundLocation}) no-repeat center;
  background-size: cover;

  display: flex;
  height: 60vh;
  z-index: 1;
`
export const PredictionsWrapper = styled.section`
  transition: all 0.5s ease;
  background: url(${background}) no-repeat center;
  /* covers the whole screen */
  background-size: cover;
`
export const Button = styled.button`
  /* width: 20px; */
  background: white;
  color: #ab0e3c;
  font-size: 1.5rem;
  padding: 10px 32px;
  font-weight: 700;
  border-radius: 6px;
  border: 2px solid black;
  transition: all 0.3s ease;
  margin-bottom: 60px;
`
