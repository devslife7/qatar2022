import React, { useEffect, useState } from 'react'
import Home from '../views/Home'
import Navbar from '../components/Navbar'
import Fixtures from '../views/Fixtures'
import Predictions from '../views/Predictions'
const serverURL = process.env.REACT_APP_SERVER_URL
const fixturesURL = serverURL + '/fixtures'

const fixtures = [
  {
    fixture: {
      id: 855734,
      referee: 'Wilton Pereira Sampaio, Brazil',
      timezone: 'UTC',
      date: '2022-11-21T16:00:00+00:00',
      timestamp: 1669046400,
      periods: {
        first: 1669046400,
        second: 1669050000,
      },
      venue: {
        id: null,
        name: 'Al-Thumama Stadium',
        city: 'Al-Thumama',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
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
        winner: false,
      },
      away: {
        id: 1118,
        name: 'Netherlands',
        logo: 'https://media.api-sports.io/football/teams/1118.png',
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 2,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
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
  {
    fixture: {
      id: 855735,
      referee: 'Raphael Claus, Brazil',
      timezone: 'UTC',
      date: '2022-11-21T13:00:00+00:00',
      timestamp: 1669035600,
      periods: {
        first: 1669035600,
        second: 1669039200,
      },
      venue: {
        id: null,
        name: 'Khalifa International Stadium',
        city: 'Doha',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
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
        winner: true,
      },
      away: {
        id: 22,
        name: 'Iran',
        logo: 'https://media.api-sports.io/football/teams/22.png',
        winner: false,
      },
    },
    goals: {
      home: 6,
      away: 2,
    },
    score: {
      halftime: {
        home: 3,
        away: 0,
      },
      fulltime: {
        home: 6,
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
      id: 855736,
      referee: 'Daniele Orsato, Italy',
      timezone: 'UTC',
      date: '2022-11-20T16:00:00+00:00',
      timestamp: 1668960000,
      periods: {
        first: 1668960000,
        second: 1668963600,
      },
      venue: {
        id: null,
        name: 'Al Bayt Stadium',
        city: 'Al Khor',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
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
        winner: false,
      },
      away: {
        id: 2382,
        name: 'Ecuador',
        logo: 'https://media.api-sports.io/football/teams/2382.png',
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 2,
    },
    score: {
      halftime: {
        home: 0,
        away: 2,
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
  {
    fixture: {
      id: 855737,
      referee: 'Slavko Vincic, Slovenia',
      timezone: 'UTC',
      date: '2022-11-22T10:00:00+00:00',
      timestamp: 1669111200,
      periods: {
        first: 1669111200,
        second: 1669114800,
      },
      venue: {
        id: null,
        name: 'Lusail Iconic Stadium',
        city: 'Lusail',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
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
        winner: false,
      },
      away: {
        id: 23,
        name: 'Saudi Arabia',
        logo: 'https://media.api-sports.io/football/teams/23.png',
        winner: true,
      },
    },
    goals: {
      home: 1,
      away: 2,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 1,
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
      id: 855738,
      referee: 'Cesar Arturo Ramos Palazuelos, Mexico',
      timezone: 'UTC',
      date: '2022-11-22T13:00:00+00:00',
      timestamp: 1669122000,
      periods: {
        first: 1669122000,
        second: 1669125600,
      },
      venue: {
        id: null,
        name: 'Education City Stadium',
        city: 'Al Rayyan',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
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
      home: 0,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
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
      id: 855739,
      referee: 'Chris Beath, Australia',
      timezone: 'UTC',
      date: '2022-11-22T16:00:00+00:00',
      timestamp: 1669132800,
      periods: {
        first: 1669132800,
        second: 1669136400,
      },
      venue: {
        id: null,
        name: 'Stadium 974',
        city: 'Ras Abu Aboud',
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90,
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
      home: 0,
      away: 0,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
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
      id: 855740,
      referee: 'F. Rapallini',
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
      referee: 'Ivan Cisneros',
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
      referee: 'J. Sikazwe',
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
      referee: 'F. Tello',
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
      referee: 'C. Turpin',
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
      referee: 'I. Elfath',
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
      referee: 'A. Faghani',
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
]

export default function MainPage() {
  // const [fixtures, setFixtures] = useState([])
  // useEffect(() => {
  //   fetch(fixturesURL)
  //     .then(resp => resp.json())
  //     .then(fixtures => setFixtures(fixtures))
  // }, [])

  const sortedFixtures = fixtures.sort((a, b) => a.fixture.timestamp - b.fixture.timestamp)

  return (
    <>
      <Navbar />
      <Home />
      <Predictions fixtures={sortedFixtures} />
      <Fixtures fixtures={sortedFixtures} />
    </>
  )
}
