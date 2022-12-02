import React from 'react'
import { Container } from '../../assets/styles/Global.style'
import FixtureCard from './components/FixtureCard'

export default function Fixtures({ fixtures }) {
  const renderFixtures = () => {
    if (fixtures.length === 0) return
    return fixtures.map((fixture, idx) => <FixtureCard key={idx} fixture={fixture} />)
  }

  return (
    <div className='fixtures' style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        <div style={{ padding: '40px 10px 40px 10px' }}>{renderFixtures()}</div>
      </Container>
    </div>
  )
}
