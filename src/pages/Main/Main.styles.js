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

  padding: 5px 0;
  display: flex;
`
export const TextPricePool = styled.p`
  font-size: 2.3rem;
  font-weight: 900;
  color: #ab0e3c;
  text-align: center;
  margin-bottom: 1rem;
  padding-top: 1rem;
`
export const Text1st = styled.p`
  font-size: 2rem;
  font-weight: 800;
  color: #ab0e3c;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
`
export const Text2nd = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  color: #ab0e3c;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
`
export const Text3rd = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: #ab0e3c;
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const PredictionListWrapper = styled.div`
  /* background-color: red; */

  padding: '5px 10px 5px 13px';
  width: inherit;

  font-size: 1.3rem;
`
