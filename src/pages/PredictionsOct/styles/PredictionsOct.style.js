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
`
