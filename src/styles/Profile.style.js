import styled from 'styled-components'

export const Component = styled.div`
  background-color: black;
  color: white;
`
export const UserTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 40px 0 40px 0;
`

// PredictionCardProfile.js Styles:
export const Card = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 0.5px solid gray;
`
export const Predictions = styled.div`
  width: 30%;
  display: flex;
  border-right: 0.5px solid gray;
  /* background-color: green; */
  border-radius: 5px;
  background-color: ${props => props.correctPrediction == 'correct' && 'green'};
  background-color: ${props => props.correctPrediction == 'incorrect' && 'red'};
  background-color: ${props => props.correctPrediction == 'N/A' && 'none'};

  justify-content: center;
`
export const Fixtures = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`
export const Flag = styled.img`
  height: 20px;
  width: 30px;
  /* margin: 0 20px 0 20px; */
`
export const HomeTeam = styled.div`
  width: 40%;
  display: flex;
  justify-content: right;
  align-items: center;
`
export const AwayTeam = styled.div`
  width: 40%;
  display: flex;
  justify-content: left;
  align-items: center;
`
export const GameScore = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
