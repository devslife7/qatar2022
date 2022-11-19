import React, { useEffect } from 'react'
import './Fixtures.css'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import FixtureCard from './FixtureCard'

const serverURL = process.env.REACT_APP_SERVER_URL

const fixtures = [
  {
    fixture: {
      id: 607304,
      referee: null,
      timezone: 'UTC',
      date: '2021-04-19T00:00:00+00:00',
      timestamp: 1618790400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: null,
        name: null,
        city: null,
      },
      status: {
        long: 'Match Cancelled',
        short: 'CANC',
        elapsed: null,
      },
    },
    league: {
      id: 336,
      name: 'Druha Liga - Group A',
      country: 'Ukraine',
      logo: 'https://media.api-sports.io/football/leagues/336.png',
      flag: 'https://media.api-sports.io/flags/ua.svg',
      season: 2020,
      round: 'Group A - 18',
    },
    teams: {
      home: {
        id: 6490,
        name: 'Kalush',
        logo: 'https://media.api-sports.io/football/teams/6490.png',
        winner: null,
      },
      away: {
        id: 6487,
        name: 'Dinaz Vyshhorod',
        logo: 'https://media.api-sports.io/football/teams/6487.png',
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 625311,
      referee: null,
      timezone: 'UTC',
      date: '2021-04-19T00:00:00+00:00',
      timestamp: 1618790400,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: null,
        name: null,
        city: null,
      },
      status: {
        long: 'Match Cancelled',
        short: 'CANC',
        elapsed: null,
      },
    },
    league: {
      id: 337,
      name: 'Druha Liga - Group B',
      country: 'Ukraine',
      logo: 'https://media.api-sports.io/football/leagues/337.png',
      flag: 'https://media.api-sports.io/flags/ua.svg',
      season: 2020,
      round: 'Group B - 18',
    },
    teams: {
      home: {
        id: 4656,
        name: 'Cherkashchyna-Akademiya',
        logo: 'https://media.api-sports.io/football/teams/4656.png',
        winner: null,
      },
      away: {
        id: 14439,
        name: 'Peremoga',
        logo: 'https://media.api-sports.io/football/teams/14439.png',
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 652935,
      referee: 'L. Santander',
      timezone: 'UTC',
      date: '2021-04-19T00:00:00+00:00',
      timestamp: 1618790400,
      periods: {
        first: 1618790400,
        second: 1618794000,
      },
      venue: {
        id: 1085,
        name: 'Estadio Nuevo Corona',
        city: 'Torreón',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 262,
      name: 'Liga MX',
      country: 'Mexico',
      logo: 'https://media.api-sports.io/football/leagues/262.png',
      flag: 'https://media.api-sports.io/flags/mx.svg',
      season: 2020,
      round: 'Clausura - 15',
    },
    teams: {
      home: {
        id: 2285,
        name: 'Santos Laguna',
        logo: 'https://media.api-sports.io/football/teams/2285.png',
        winner: true,
      },
      away: {
        id: 2281,
        name: 'Toluca',
        logo: 'https://media.api-sports.io/football/teams/2281.png',
        winner: false,
      },
    },
    goals: {
      home: 3,
      away: 1,
    },
    score: {
      halftime: {
        home: 2,
        away: 0,
      },
      fulltime: {
        home: 3,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 653985,
      referee: 'J. Calderón',
      timezone: 'UTC',
      date: '2021-04-19T00:00:00+00:00',
      timestamp: 1618790400,
      periods: {
        first: 1618790400,
        second: 1618794000,
      },
      venue: {
        id: 406,
        name: 'Estadio Carlos Ugalde Álvarez',
        city: 'Ciudad Quesada',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 162,
      name: 'Primera División',
      country: 'Costa-Rica',
      logo: 'https://media.api-sports.io/football/leagues/162.png',
      flag: 'https://media.api-sports.io/flags/cr.svg',
      season: 2020,
      round: 'Clausura - 18',
    },
    teams: {
      home: {
        id: 823,
        name: 'San Carlos',
        logo: 'https://media.api-sports.io/football/teams/823.png',
        winner: true,
      },
      away: {
        id: 824,
        name: 'Santos DE Guapiles',
        logo: 'https://media.api-sports.io/football/teams/824.png',
        winner: false,
      },
    },
    goals: {
      home: 1,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 1,
        away: 0,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 674129,
      referee: 'J. Broggi',
      timezone: 'UTC',
      date: '2021-04-19T00:00:00+00:00',
      timestamp: 1618790400,
      periods: {
        first: 1618790400,
        second: 1618794000,
      },
      venue: {
        id: 57,
        name: 'Estadio Brigadier General Estanislao López',
        city: 'Ciudad de Santa Fe, Provincia de Santa Fe',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 128,
      name: 'Liga Profesional Argentina',
      country: 'Argentina',
      logo: 'https://media.api-sports.io/football/leagues/128.png',
      flag: 'https://media.api-sports.io/flags/ar.svg',
      season: 2021,
      round: '1st Phase - 10',
    },
    teams: {
      home: {
        id: 448,
        name: 'Colon Santa Fe',
        logo: 'https://media.api-sports.io/football/teams/448.png',
        winner: null,
      },
      away: {
        id: 439,
        name: 'Godoy Cruz',
        logo: 'https://media.api-sports.io/football/teams/439.png',
        winner: null,
      },
    },
    goals: {
      home: 2,
      away: 2,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 2,
        away: 2,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 679600,
      referee: 'O. Velez',
      timezone: 'UTC',
      date: '2021-04-19T00:00:00+00:00',
      timestamp: 1618790400,
      periods: {
        first: 1618790400,
        second: 1618794000,
      },
      venue: {
        id: null,
        name: 'Estadio Nacional de Fútbol',
        city: 'Managua',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 396,
      name: 'Primera Division',
      country: 'Nicaragua',
      logo: 'https://media.api-sports.io/football/leagues/396.png',
      flag: 'https://media.api-sports.io/flags/ni.svg',
      season: 2020,
      round: 'Clausura - 14',
    },
    teams: {
      home: {
        id: 4644,
        name: 'Managua',
        logo: 'https://media.api-sports.io/football/teams/4644.png',
        winner: true,
      },
      away: {
        id: 4643,
        name: 'Juventus Managua',
        logo: 'https://media.api-sports.io/football/teams/4643.png',
        winner: false,
      },
    },
    goals: {
      home: 4,
      away: 1,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 4,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 714048,
      referee: null,
      timezone: 'UTC',
      date: '2021-04-19T00:00:00+00:00',
      timestamp: 1618790400,
      periods: {
        first: 1618790400,
        second: 1618794000,
      },
      venue: {
        id: null,
        name: 'David Barro Stadium',
        city: 'Melbourne',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
      },
    },
    league: {
      id: 836,
      name: 'Victoria NPL 2',
      country: 'Australia',
      logo: 'https://media.api-sports.io/football/leagues/836.png',
      flag: 'https://media.api-sports.io/flags/au.svg',
      season: 2021,
      round: 'Regular Season - 4',
    },
    teams: {
      home: {
        id: 16781,
        name: 'Bulleen Lions',
        logo: 'https://media.api-sports.io/football/teams/16781.png',
        winner: false,
      },
      away: {
        id: 16780,
        name: 'Brunswick City',
        logo: 'https://media.api-sports.io/football/teams/16780.png',
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 2,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: 0,
        away: 2,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
]

export default function Fixtures() {
  useEffect(() => {
    fetch(serverURL + '/fixtures')
      .then(resp => resp.json())
      .then(data => console.log('Fixtures fetch: ', data))
      .catch(err => console.log(err))
  }, [])

  const renderFixtures = () => {
    return fixtures.map((fixture, idx) => (
      <Grid key={idx} item>
        <FixtureCard fixture={fixture} />
        <Divider />
      </Grid>
    ))
  }

  return (
    <div className='fixtures_home'>
      <div className='container fixtures_container' style={{ padding: '60px 10px 60px 10px' }}>
        <div>{renderFixtures()}</div>
      </div>
    </div>
  )
}
