import React, { useState } from 'react'
import { AwayTeam, Flag, HomeTeam, MatchCardWrapper, VsTag } from '../styles/PredictionsOct.style'
// import { countryCodesShortFromName } from '../../../Data/CountryCodes'

export default function MatchCard({ fixture, handleUserPredictions, userPredictions }) {
  const [selected, setSelected] = useState(false)
  const toggleSelected = () => setSelected(!selected)
  // const homeTeamName = countryCodesShortFromName[fixture.teams.home.name]
  // const awayTeamName = countryCodesShortFromName[fixture.teams.away.name]
  const homeTeamId = fixture.teams.home.id
  const awayTeamId = fixture.teams.away.id

  const handleSelection = id => {
    handleUserPredictions(id)
    toggleSelected()
  }

  const isSelectedLogic = id => {
    return userPredictions.includes(id) ? true : false
  }

  return (
    <MatchCardWrapper>
      <HomeTeam onClick={e => handleSelection(homeTeamId)} selected={isSelectedLogic(homeTeamId)}>
        <div>{fixture.teams.home.name}</div>
        <Flag src={fixture.teams.home.logo} marginLeft />
      </HomeTeam>
      <VsTag>vs</VsTag>
      <AwayTeam onClick={e => handleSelection(awayTeamId)} selected={isSelectedLogic(awayTeamId)}>
        <Flag src={fixture.teams.away.logo} marginRight />
        <div>{fixture.teams.away.name}</div>
      </AwayTeam>
    </MatchCardWrapper>
  )
}
