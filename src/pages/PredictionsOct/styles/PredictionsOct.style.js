import styled from 'styled-components'

export const Section = styled.section`
  background-color: black;
  color: white;
  margin-top: 0px;
`
export const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding: 50px 30px 0;
`
export const Matches = styled.div`
  min-height: 20vh;
`
export const MatchCardWrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  margin: 20px 0;
`
export const HomeTeam = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 20px 0;
  border-radius: 10px;
  background-color: ${props => props.selected && 'green'};
`
export const AwayTeam = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-radius: 10px;
  background-color: ${props => props.selected && 'green'};
`
export const VsTag = styled.div`
  width: 10%;
  text-align: center;
  padding: 20px 0;
`
export const Flag = styled.img`
  margin-left: ${props => props.marginLeft && '10px'};
  margin-right: ${props => props.marginRight && '10px'};
  height: 20px;
  width: 30px;
`
export const NameInputs = styled.div`
  background-color: white;
  min-height: 20vh;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  /* width: 20px; */
  background: white;
  /* color: white; */
  font-size: 1rem;
  padding: 10px 32px;
  font-weight: 500;
  border-radius: 6px;
  border: 2px solid black;
  transition: all 0.3s ease;
`

// background: var(--color-primary);
//   font-size: 24px;
//   padding: 10px 32px;
//   margin-top: 10px;
//   font-weight: 500;
//   border-radius: 6px;
//   border: 2px solid var(--color-primary);
//   transition: all 0.3s ease;
// }
