import React, { useEffect, useState } from 'react'
import './Predictions.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import PredictionsCard from './PredictionsCard'

const serverURL = process.env.REACT_APP_SERVER_URL

const countryCodes = {
  A1: 'Qatar',
  A2: 'Ecuador',
  A3: 'Senegal',
  A4: 'Netherlands',

  B1: 'England',
  B2: 'Iran',
  B3: 'USA',
  B4: 'Wales',

  C1: 'Argentina',
  C2: 'Saudi Arabia',
  C3: 'Mexico',
  C4: 'Poland',

  D1: 'France',
  D2: 'Australia',
  D3: 'Denmark',
  D4: 'Tunisia',

  E1: 'Spain',
  E2: 'Costa Rica',
  E3: 'Germany',
  E4: 'Japan',

  F1: 'Belgium',
  F2: 'Canada',
  F3: 'Morocco',
  F4: 'Croatia',

  G1: 'Brazil',
  G2: 'Serbia',
  G3: 'Switzerland',
  G4: 'Cameroon',

  H1: 'Portugal',
  H2: 'Ghana',
  H3: 'Uruguay',
  H4: 'South Korea',
}
const fixtures = [
  ({
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
  }),
]
const finalResutArray = [
  'F4',
  'E3',
  'B2',
  'H4',
  'F4',
  'D2',
  'C1',
  'E1',
  'C4',
  'D2',
  'F3',
  'E1',
  'H1',
  'G4',
  'C1',
  'G1',
  'C4',
  'A2',
  'C4',
  'A3',
  'A3',
  'B4',
  'A1',
  'A1',
  'B4',
  'H3',
  'B2',
  'E4',
  'C1',
  'C3',
  'G4',
  'E3',
  'D2',
  'C2',
  'F1',
  'G3',
  'A2',
  'G2',
  'D1',
  'G1',
  'F3',
  'D2',
  'C1',
  'H3',
  'F3',
  'A1',
  'D4',
  'F3',
]

export default function Predictions() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch(serverURL + '/users')
      .then(resp => resp.json())
      .then(data => setUserData(data.users))
      .catch(err => console.log(err))
  }, [])

  const userPredictions = () => {
    console.log('UserData', userData)
    const usersWithCalculatedRightMatches = userData.map(user => {
      let rightMatches = findMatches(finalResutArray, user.predictionsGS)
      return { ...user, rightMatches: rightMatches }
    })

    const sortedUsers = usersWithCalculatedRightMatches.sort((a, b) => b.rightMatches - a.rightMatches)
    return sortedUsers.map((user, idx) => (
      <Grid container style={{ margin: '12px 0 12px 0' }}>
        <PredictionsCard key={idx} user={user} />
        {/* <Divider style={{ width: '100%', margin: '15px 0 15px 0' }} /> */}
      </Grid>
    ))
  }

  const findMatches = (officialResult = [], predictions = []) => {
    let counter = 0
    for (let i = 0; i < officialResult.length; i++) {
      officialResult[i] === predictions[i] && counter++
    }
    return counter
  }

  const pricePool = 1250

  return (
    <div className='predictions'>
      <div className='predictions__content container'>
        {/* <h2 className='predictions__title'>Predictions</h2> */}

        <Paper style={{ marginTop: '2.5rem' }}>
          <Grid
            container
            spacing={2}
            className='predictions_containerGrid'
            style={{ padding: '5px 17px 5px 17px' }}
          >
            {userPredictions()}
          </Grid>
        </Paper>

        <Paper>
          <p
            style={{
              fontSize: '2.3rem',
              fontWeight: 900,
              color: '#AB0E3C',
              textAlign: 'center',
              marginBottom: '1rem',
              paddingTop: '1rem',
            }}
          >
            Price Pool {`  $${pricePool}`}
          </p>
          <p
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#AB0E3C',
              textAlign: 'center',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            1st {` $${pricePool * 0.6}`}
          </p>
          <p
            style={{
              fontSize: '1.7rem',
              fontWeight: 700,
              color: '#AB0E3C',
              textAlign: 'center',
              marginTop: 0,
              marginBottom: '1rem',
            }}
          >
            2nd {` $${pricePool * 0.3}`}
          </p>
          <p
            style={{
              fontSize: '1.6rem',
              fontWeight: 600,
              marginBottom: '4rem',
              color: '#AB0E3C',
              textAlign: 'center',
              marginTop: '1rem',
              paddingBottom: '1.5rem',
            }}
          >
            3rd {`$${pricePool * 0.1}`}
          </p>
        </Paper>
      </div>
    </div>
  )
}
