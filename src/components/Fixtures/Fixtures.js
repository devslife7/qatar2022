import React, { useEffect, useState } from 'react'
import './Fixtures.css'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import FixtureCard from './FixtureCard'

const serverURL = process.env.REACT_APP_SERVER_URL

const fixturesFull = {
  get: 'fixtures',
  parameters: {
    league: '1',
    season: '2022',
  },
  errors: [],
  results: 48,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 855734,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-21T16:00:00+00:00',
        timestamp: 1669046400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Thumama Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 13,
          name: 'Senegal',
          logo: 'https://media.api-sports.io/football/teams/13.png',
          winner: null,
        },
        away: {
          id: 1118,
          name: 'Netherlands',
          logo: 'https://media.api-sports.io/football/teams/1118.png',
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
        id: 855735,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-21T13:00:00+00:00',
        timestamp: 1669035600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Khalifa International Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 10,
          name: 'England',
          logo: 'https://media.api-sports.io/football/teams/10.png',
          winner: null,
        },
        away: {
          id: 22,
          name: 'Iran',
          logo: 'https://media.api-sports.io/football/teams/22.png',
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
        id: 855736,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-20T16:00:00+00:00',
        timestamp: 1668960000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Bayt Stadium',
          city: 'Al Khor',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 1569,
          name: 'Qatar',
          logo: 'https://media.api-sports.io/football/teams/1569.png',
          winner: null,
        },
        away: {
          id: 2382,
          name: 'Ecuador',
          logo: 'https://media.api-sports.io/football/teams/2382.png',
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
        id: 855737,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-22T10:00:00+00:00',
        timestamp: 1669111200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Lusail Iconic Stadium',
          city: 'Lusail',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 26,
          name: 'Argentina',
          logo: 'https://media.api-sports.io/football/teams/26.png',
          winner: null,
        },
        away: {
          id: 23,
          name: 'Saudi Arabia',
          logo: 'https://media.api-sports.io/football/teams/23.png',
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
        id: 855738,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-22T13:00:00+00:00',
        timestamp: 1669122000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Education City Stadium',
          city: 'Ar-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 21,
          name: 'Denmark',
          logo: 'https://media.api-sports.io/football/teams/21.png',
          winner: null,
        },
        away: {
          id: 28,
          name: 'Tunisia',
          logo: 'https://media.api-sports.io/football/teams/28.png',
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
        id: 855739,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-22T16:00:00+00:00',
        timestamp: 1669132800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Stadium 974',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 16,
          name: 'Mexico',
          logo: 'https://media.api-sports.io/football/teams/16.png',
          winner: null,
        },
        away: {
          id: 24,
          name: 'Poland',
          logo: 'https://media.api-sports.io/football/teams/24.png',
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
        id: 855740,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-23T10:00:00+00:00',
        timestamp: 1669197600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Bayt Stadium',
          city: 'Al Khor',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 31,
          name: 'Morocco',
          logo: 'https://media.api-sports.io/football/teams/31.png',
          winner: null,
        },
        away: {
          id: 3,
          name: 'Croatia',
          logo: 'https://media.api-sports.io/football/teams/3.png',
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
        id: 855741,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-23T13:00:00+00:00',
        timestamp: 1669208400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Khalifa International Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 25,
          name: 'Germany',
          logo: 'https://media.api-sports.io/football/teams/25.png',
          winner: null,
        },
        away: {
          id: 12,
          name: 'Japan',
          logo: 'https://media.api-sports.io/football/teams/12.png',
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
        id: 855742,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-23T19:00:00+00:00',
        timestamp: 1669230000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Ahmad bin Ali Stadium',
          city: 'Al-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 1,
          name: 'Belgium',
          logo: 'https://media.api-sports.io/football/teams/1.png',
          winner: null,
        },
        away: {
          id: 5529,
          name: 'Canada',
          logo: 'https://media.api-sports.io/football/teams/5529.png',
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
        id: 855743,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-24T10:00:00+00:00',
        timestamp: 1669284000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 15,
          name: 'Switzerland',
          logo: 'https://media.api-sports.io/football/teams/15.png',
          winner: null,
        },
        away: {
          id: 1530,
          name: 'Cameroon',
          logo: 'https://media.api-sports.io/football/teams/1530.png',
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
        id: 855744,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-24T13:00:00+00:00',
        timestamp: 1669294800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Education City Stadium',
          city: 'Ar-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 7,
          name: 'Uruguay',
          logo: 'https://media.api-sports.io/football/teams/7.png',
          winner: null,
        },
        away: {
          id: 17,
          name: 'South Korea',
          logo: 'https://media.api-sports.io/football/teams/17.png',
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
        id: 855745,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-24T16:00:00+00:00',
        timestamp: 1669305600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Stadium 974',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 27,
          name: 'Portugal',
          logo: 'https://media.api-sports.io/football/teams/27.png',
          winner: null,
        },
        away: {
          id: 1504,
          name: 'Ghana',
          logo: 'https://media.api-sports.io/football/teams/1504.png',
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
        id: 855746,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-24T19:00:00+00:00',
        timestamp: 1669316400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Lusail Iconic Stadium',
          city: 'Lusail',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 6,
          name: 'Brazil',
          logo: 'https://media.api-sports.io/football/teams/6.png',
          winner: null,
        },
        away: {
          id: 14,
          name: 'Serbia',
          logo: 'https://media.api-sports.io/football/teams/14.png',
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
        id: 855747,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-25T13:00:00+00:00',
        timestamp: 1669381200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Thumama Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 1569,
          name: 'Qatar',
          logo: 'https://media.api-sports.io/football/teams/1569.png',
          winner: null,
        },
        away: {
          id: 13,
          name: 'Senegal',
          logo: 'https://media.api-sports.io/football/teams/13.png',
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
        id: 855748,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-25T16:00:00+00:00',
        timestamp: 1669392000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Khalifa International Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 1118,
          name: 'Netherlands',
          logo: 'https://media.api-sports.io/football/teams/1118.png',
          winner: null,
        },
        away: {
          id: 2382,
          name: 'Ecuador',
          logo: 'https://media.api-sports.io/football/teams/2382.png',
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
        id: 855749,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-25T19:00:00+00:00',
        timestamp: 1669402800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Bayt Stadium',
          city: 'Al Khor',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 10,
          name: 'England',
          logo: 'https://media.api-sports.io/football/teams/10.png',
          winner: null,
        },
        away: {
          id: 2384,
          name: 'USA',
          logo: 'https://media.api-sports.io/football/teams/2384.png',
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
        id: 855750,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-26T13:00:00+00:00',
        timestamp: 1669467600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Education City Stadium',
          city: 'Ar-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 24,
          name: 'Poland',
          logo: 'https://media.api-sports.io/football/teams/24.png',
          winner: null,
        },
        away: {
          id: 23,
          name: 'Saudi Arabia',
          logo: 'https://media.api-sports.io/football/teams/23.png',
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
        id: 855751,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-26T16:00:00+00:00',
        timestamp: 1669478400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Stadium 974',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 2,
          name: 'France',
          logo: 'https://media.api-sports.io/football/teams/2.png',
          winner: null,
        },
        away: {
          id: 21,
          name: 'Denmark',
          logo: 'https://media.api-sports.io/football/teams/21.png',
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
        id: 855752,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-26T19:00:00+00:00',
        timestamp: 1669489200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Lusail Iconic Stadium',
          city: 'Lusail',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 26,
          name: 'Argentina',
          logo: 'https://media.api-sports.io/football/teams/26.png',
          winner: null,
        },
        away: {
          id: 16,
          name: 'Mexico',
          logo: 'https://media.api-sports.io/football/teams/16.png',
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
        id: 855753,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-27T13:00:00+00:00',
        timestamp: 1669554000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Thumama Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 1,
          name: 'Belgium',
          logo: 'https://media.api-sports.io/football/teams/1.png',
          winner: null,
        },
        away: {
          id: 31,
          name: 'Morocco',
          logo: 'https://media.api-sports.io/football/teams/31.png',
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
        id: 855754,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-27T16:00:00+00:00',
        timestamp: 1669564800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Khalifa International Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 3,
          name: 'Croatia',
          logo: 'https://media.api-sports.io/football/teams/3.png',
          winner: null,
        },
        away: {
          id: 5529,
          name: 'Canada',
          logo: 'https://media.api-sports.io/football/teams/5529.png',
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
        id: 855755,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-27T19:00:00+00:00',
        timestamp: 1669575600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Bayt Stadium',
          city: 'Al Khor',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 9,
          name: 'Spain',
          logo: 'https://media.api-sports.io/football/teams/9.png',
          winner: null,
        },
        away: {
          id: 25,
          name: 'Germany',
          logo: 'https://media.api-sports.io/football/teams/25.png',
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
        id: 855756,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-28T10:00:00+00:00',
        timestamp: 1669629600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 1530,
          name: 'Cameroon',
          logo: 'https://media.api-sports.io/football/teams/1530.png',
          winner: null,
        },
        away: {
          id: 14,
          name: 'Serbia',
          logo: 'https://media.api-sports.io/football/teams/14.png',
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
        id: 855757,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-28T13:00:00+00:00',
        timestamp: 1669640400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Education City Stadium',
          city: 'Ar-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 17,
          name: 'South Korea',
          logo: 'https://media.api-sports.io/football/teams/17.png',
          winner: null,
        },
        away: {
          id: 1504,
          name: 'Ghana',
          logo: 'https://media.api-sports.io/football/teams/1504.png',
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
        id: 855758,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-28T16:00:00+00:00',
        timestamp: 1669651200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Stadium 974',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 6,
          name: 'Brazil',
          logo: 'https://media.api-sports.io/football/teams/6.png',
          winner: null,
        },
        away: {
          id: 15,
          name: 'Switzerland',
          logo: 'https://media.api-sports.io/football/teams/15.png',
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
        id: 855759,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-28T19:00:00+00:00',
        timestamp: 1669662000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Lusail Iconic Stadium',
          city: 'Lusail',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 27,
          name: 'Portugal',
          logo: 'https://media.api-sports.io/football/teams/27.png',
          winner: null,
        },
        away: {
          id: 7,
          name: 'Uruguay',
          logo: 'https://media.api-sports.io/football/teams/7.png',
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
        id: 855760,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-29T15:00:00+00:00',
        timestamp: 1669734000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Bayt Stadium',
          city: 'Al Khor',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 1118,
          name: 'Netherlands',
          logo: 'https://media.api-sports.io/football/teams/1118.png',
          winner: null,
        },
        away: {
          id: 1569,
          name: 'Qatar',
          logo: 'https://media.api-sports.io/football/teams/1569.png',
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
        id: 855761,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-29T15:00:00+00:00',
        timestamp: 1669734000,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Khalifa International Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 2382,
          name: 'Ecuador',
          logo: 'https://media.api-sports.io/football/teams/2382.png',
          winner: null,
        },
        away: {
          id: 13,
          name: 'Senegal',
          logo: 'https://media.api-sports.io/football/teams/13.png',
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
        id: 855762,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-29T19:00:00+00:00',
        timestamp: 1669748400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Thumama Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 22,
          name: 'Iran',
          logo: 'https://media.api-sports.io/football/teams/22.png',
          winner: null,
        },
        away: {
          id: 2384,
          name: 'USA',
          logo: 'https://media.api-sports.io/football/teams/2384.png',
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
        id: 855763,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-30T15:00:00+00:00',
        timestamp: 1669820400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Education City Stadium',
          city: 'Ar-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 28,
          name: 'Tunisia',
          logo: 'https://media.api-sports.io/football/teams/28.png',
          winner: null,
        },
        away: {
          id: 2,
          name: 'France',
          logo: 'https://media.api-sports.io/football/teams/2.png',
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
        id: 855764,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-30T19:00:00+00:00',
        timestamp: 1669834800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Stadium 974',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 24,
          name: 'Poland',
          logo: 'https://media.api-sports.io/football/teams/24.png',
          winner: null,
        },
        away: {
          id: 26,
          name: 'Argentina',
          logo: 'https://media.api-sports.io/football/teams/26.png',
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
        id: 855765,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-30T19:00:00+00:00',
        timestamp: 1669834800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Lusail Iconic Stadium',
          city: 'Lusail',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 23,
          name: 'Saudi Arabia',
          logo: 'https://media.api-sports.io/football/teams/23.png',
          winner: null,
        },
        away: {
          id: 16,
          name: 'Mexico',
          logo: 'https://media.api-sports.io/football/teams/16.png',
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
        id: 855766,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-01T15:00:00+00:00',
        timestamp: 1669906800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Ahmad bin Ali Stadium',
          city: 'Al-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 3,
          name: 'Croatia',
          logo: 'https://media.api-sports.io/football/teams/3.png',
          winner: null,
        },
        away: {
          id: 1,
          name: 'Belgium',
          logo: 'https://media.api-sports.io/football/teams/1.png',
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
        id: 855767,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-01T15:00:00+00:00',
        timestamp: 1669906800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Thumama Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 5529,
          name: 'Canada',
          logo: 'https://media.api-sports.io/football/teams/5529.png',
          winner: null,
        },
        away: {
          id: 31,
          name: 'Morocco',
          logo: 'https://media.api-sports.io/football/teams/31.png',
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
        id: 855768,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-01T19:00:00+00:00',
        timestamp: 1669921200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Khalifa International Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 12,
          name: 'Japan',
          logo: 'https://media.api-sports.io/football/teams/12.png',
          winner: null,
        },
        away: {
          id: 9,
          name: 'Spain',
          logo: 'https://media.api-sports.io/football/teams/9.png',
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
        id: 855769,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-02T15:00:00+00:00',
        timestamp: 1669993200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Education City Stadium',
          city: 'Ar-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 17,
          name: 'South Korea',
          logo: 'https://media.api-sports.io/football/teams/17.png',
          winner: null,
        },
        away: {
          id: 27,
          name: 'Portugal',
          logo: 'https://media.api-sports.io/football/teams/27.png',
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
        id: 855770,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-02T15:00:00+00:00',
        timestamp: 1669993200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 1504,
          name: 'Ghana',
          logo: 'https://media.api-sports.io/football/teams/1504.png',
          winner: null,
        },
        away: {
          id: 7,
          name: 'Uruguay',
          logo: 'https://media.api-sports.io/football/teams/7.png',
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
        id: 855771,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-02T19:00:00+00:00',
        timestamp: 1670007600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Lusail Iconic Stadium',
          city: 'Lusail',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 1530,
          name: 'Cameroon',
          logo: 'https://media.api-sports.io/football/teams/1530.png',
          winner: null,
        },
        away: {
          id: 6,
          name: 'Brazil',
          logo: 'https://media.api-sports.io/football/teams/6.png',
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
        id: 855772,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-02T19:00:00+00:00',
        timestamp: 1670007600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Stadium 974',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 14,
          name: 'Serbia',
          logo: 'https://media.api-sports.io/football/teams/14.png',
          winner: null,
        },
        away: {
          id: 15,
          name: 'Switzerland',
          logo: 'https://media.api-sports.io/football/teams/15.png',
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
        id: 866681,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-21T19:00:00+00:00',
        timestamp: 1669057200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Ahmad bin Ali Stadium',
          city: 'Al-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 2384,
          name: 'USA',
          logo: 'https://media.api-sports.io/football/teams/2384.png',
          winner: null,
        },
        away: {
          id: 767,
          name: 'Wales',
          logo: 'https://media.api-sports.io/football/teams/767.png',
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
        id: 866682,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-25T10:00:00+00:00',
        timestamp: 1669370400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Ahmad bin Ali Stadium',
          city: 'Al-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 767,
          name: 'Wales',
          logo: 'https://media.api-sports.io/football/teams/767.png',
          winner: null,
        },
        away: {
          id: 22,
          name: 'Iran',
          logo: 'https://media.api-sports.io/football/teams/22.png',
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
        id: 866683,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-29T19:00:00+00:00',
        timestamp: 1669748400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Ahmad bin Ali Stadium',
          city: 'Al-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 767,
          name: 'Wales',
          logo: 'https://media.api-sports.io/football/teams/767.png',
          winner: null,
        },
        away: {
          id: 10,
          name: 'England',
          logo: 'https://media.api-sports.io/football/teams/10.png',
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
        id: 871850,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-22T19:00:00+00:00',
        timestamp: 1669143600,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 2,
          name: 'France',
          logo: 'https://media.api-sports.io/football/teams/2.png',
          winner: null,
        },
        away: {
          id: 20,
          name: 'Australia',
          logo: 'https://media.api-sports.io/football/teams/20.png',
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
        id: 871851,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-23T16:00:00+00:00',
        timestamp: 1669219200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Thumama Stadium',
          city: 'Doha',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 1',
      },
      teams: {
        home: {
          id: 9,
          name: 'Spain',
          logo: 'https://media.api-sports.io/football/teams/9.png',
          winner: null,
        },
        away: {
          id: 29,
          name: 'Costa Rica',
          logo: 'https://media.api-sports.io/football/teams/29.png',
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
        id: 871852,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-26T10:00:00+00:00',
        timestamp: 1669456800,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 28,
          name: 'Tunisia',
          logo: 'https://media.api-sports.io/football/teams/28.png',
          winner: null,
        },
        away: {
          id: 20,
          name: 'Australia',
          logo: 'https://media.api-sports.io/football/teams/20.png',
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
        id: 871853,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-27T10:00:00+00:00',
        timestamp: 1669543200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Ahmad bin Ali Stadium',
          city: 'Al-Rayyan',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 12,
          name: 'Japan',
          logo: 'https://media.api-sports.io/football/teams/12.png',
          winner: null,
        },
        away: {
          id: 29,
          name: 'Costa Rica',
          logo: 'https://media.api-sports.io/football/teams/29.png',
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
        id: 871854,
        referee: null,
        timezone: 'UTC',
        date: '2022-11-30T15:00:00+00:00',
        timestamp: 1669820400,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 20,
          name: 'Australia',
          logo: 'https://media.api-sports.io/football/teams/20.png',
          winner: null,
        },
        away: {
          id: 21,
          name: 'Denmark',
          logo: 'https://media.api-sports.io/football/teams/21.png',
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
        id: 871855,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-01T19:00:00+00:00',
        timestamp: 1669921200,
        periods: {
          first: null,
          second: null,
        },
        venue: {
          id: null,
          name: 'Al Bayt Stadium',
          city: 'Al Khor',
        },
        status: {
          long: 'Not Started',
          short: 'NS',
          elapsed: null,
        },
      },
      league: {
        id: 1,
        name: 'World Cup',
        country: 'World',
        logo: 'https://media.api-sports.io/football/leagues/1.png',
        flag: null,
        season: 2022,
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 29,
          name: 'Costa Rica',
          logo: 'https://media.api-sports.io/football/teams/29.png',
          winner: null,
        },
        away: {
          id: 25,
          name: 'Germany',
          logo: 'https://media.api-sports.io/football/teams/25.png',
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
  ],
}

export default function Fixtures() {
  // const [fixtures, setFixtures] = useState([])

  useEffect(() => {
    // fetch(serverURL + '/fixtures')
    //   .then(resp => resp.json())
    //   .then(data => setFixtures(data))
    //   .catch(err => console.log(err))
  }, [])

  const renderFixtures = () => {
    const sortedFixtures = fixturesFull.response.sort((a, b) => a.fixture.timestamp - b.fixture.timestamp)
    return sortedFixtures.map((fixture, idx) => (
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
