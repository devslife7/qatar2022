export const resultsIdCodesKey = {
  1569: 'A1',
  2382: 'A2',
  13: 'A3',
  1118: 'A4',

  10: 'B1',
  22: 'B2',
  2384: 'B3',
  767: 'B4',

  26: 'C1',
  23: 'C2',
  16: 'C3',
  24: 'C4',

  2: 'D1',
  20: 'D2',
  21: 'D3',
  28: 'D4',

  9: 'E1',
  29: 'E2',
  25: 'E3',
  12: 'E4',

  1: 'F1',
  5529: 'F2',
  31: 'F3',
  3: 'F4',

  6: 'G1',
  14: 'G2',
  15: 'G3',
  1530: 'G4',

  27: 'H1',
  1504: 'H2',
  7: 'H3',
  17: 'H4',

  TIE: 'TIE',
}
export const resultsIdCodesKeyReverse = {
  A1: 1569,
  A2: 2382,
  A3: 13,
  A4: 1118,

  B1: 10,
  B2: 22,
  B3: 2384,
  B4: 767,

  C1: 26,
  C2: 23,
  C3: 16,
  C4: 24,

  D1: 2,
  D2: 20,
  D3: 21,
  D4: 28,

  E1: 9,
  E2: 29,
  E3: 25,
  E4: 12,

  F1: 1,
  F2: 5529,
  F3: 31,
  F4: 3,

  G1: 6,
  G2: 14,
  G3: 15,
  G4: 1530,

  H1: 21,
  H2: 1504,
  H3: 7,
  H4: 17,

  TIE: 'TIE',
}

export const countryCodes = {
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

  TIE: 'TIE',
}
export const countryCodesShort = {
  A1: 'QAT',
  A2: 'ECU',
  A3: 'SEN',
  A4: 'NED',

  B1: 'ENG',
  B2: 'IRN',
  B3: 'USA',
  B4: 'WAL',

  C1: 'ARG',
  C2: 'KSA',
  C3: 'MEX',
  C4: 'POL',

  D1: 'FRA',
  D2: 'AUS',
  D3: 'DEN',
  D4: 'TUN',

  E1: 'ESP',
  E2: 'CRC',
  E3: 'GER',
  E4: 'JPN',

  F1: 'BEL',
  F2: 'CAN',
  F3: 'MAR',
  F4: 'CRO',

  G1: 'BRA',
  G2: 'SRB',
  G3: 'SUI',
  G4: 'CMR',

  H1: 'POR',
  H2: 'GHA',
  H3: 'URU',
  H4: 'KOR',

  TIE: 'TIE',
}

export const apiData = {
  get: 'fixtures',
  parameters: {
    league: '1',
    season: '2022',
  },
  errors: [],
  results: 50,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
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
        referee: 'Fernando Rapallini, Argentina',
        timezone: 'UTC',
        date: '2022-11-23T10:00:00+00:00',
        timestamp: 1669197600,
        periods: {
          first: 1669197600,
          second: 1669201200,
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
        id: 855741,
        referee: 'Ivan Arcides Barton Cisneros, El Salvador',
        timezone: 'UTC',
        date: '2022-11-23T13:00:00+00:00',
        timestamp: 1669208400,
        periods: {
          first: 1669208400,
          second: 1669212000,
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
          id: 25,
          name: 'Germany',
          logo: 'https://media.api-sports.io/football/teams/25.png',
          winner: false,
        },
        away: {
          id: 12,
          name: 'Japan',
          logo: 'https://media.api-sports.io/football/teams/12.png',
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
        id: 855742,
        referee: 'Janny Sikazwe, Zambia',
        timezone: 'UTC',
        date: '2022-11-23T19:00:00+00:00',
        timestamp: 1669230000,
        periods: {
          first: 1669230000,
          second: 1669233600,
        },
        venue: {
          id: null,
          name: 'Ahmed bin Ali Stadium',
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
          id: 1,
          name: 'Belgium',
          logo: 'https://media.api-sports.io/football/teams/1.png',
          winner: true,
        },
        away: {
          id: 5529,
          name: 'Canada',
          logo: 'https://media.api-sports.io/football/teams/5529.png',
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
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
        id: 855743,
        referee: 'Facundo Tello, Argentina',
        timezone: 'UTC',
        date: '2022-11-24T10:00:00+00:00',
        timestamp: 1669284000,
        periods: {
          first: 1669284000,
          second: 1669287600,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
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
          id: 15,
          name: 'Switzerland',
          logo: 'https://media.api-sports.io/football/teams/15.png',
          winner: true,
        },
        away: {
          id: 1530,
          name: 'Cameroon',
          logo: 'https://media.api-sports.io/football/teams/1530.png',
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
        id: 855744,
        referee: 'Clement Turpin, France',
        timezone: 'UTC',
        date: '2022-11-24T13:00:00+00:00',
        timestamp: 1669294800,
        periods: {
          first: 1669294800,
          second: 1669298400,
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
        id: 855745,
        referee: 'Ismail Elfath, USA',
        timezone: 'UTC',
        date: '2022-11-24T16:00:00+00:00',
        timestamp: 1669305600,
        periods: {
          first: 1669305600,
          second: 1669309200,
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
          id: 27,
          name: 'Portugal',
          logo: 'https://media.api-sports.io/football/teams/27.png',
          winner: true,
        },
        away: {
          id: 1504,
          name: 'Ghana',
          logo: 'https://media.api-sports.io/football/teams/1504.png',
          winner: false,
        },
      },
      goals: {
        home: 3,
        away: 2,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 3,
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
        id: 855746,
        referee: 'Alireza Faghani, Iran',
        timezone: 'UTC',
        date: '2022-11-24T19:00:00+00:00',
        timestamp: 1669316400,
        periods: {
          first: 1669316400,
          second: 1669320000,
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
          id: 6,
          name: 'Brazil',
          logo: 'https://media.api-sports.io/football/teams/6.png',
          winner: true,
        },
        away: {
          id: 14,
          name: 'Serbia',
          logo: 'https://media.api-sports.io/football/teams/14.png',
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 2,
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
        id: 855747,
        referee: 'Antonio Mateu, Spain',
        timezone: 'UTC',
        date: '2022-11-25T13:00:00+00:00',
        timestamp: 1669381200,
        periods: {
          first: 1669381200,
          second: 1669384800,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 1569,
          name: 'Qatar',
          logo: 'https://media.api-sports.io/football/teams/1569.png',
          winner: false,
        },
        away: {
          id: 13,
          name: 'Senegal',
          logo: 'https://media.api-sports.io/football/teams/13.png',
          winner: true,
        },
      },
      goals: {
        home: 1,
        away: 3,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: 1,
          away: 3,
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
        referee: 'Mustapha Ghorbal, Algeria',
        timezone: 'UTC',
        date: '2022-11-25T16:00:00+00:00',
        timestamp: 1669392000,
        periods: {
          first: 1669392000,
          second: 1669395600,
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
        home: 1,
        away: 1,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: 1,
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
        id: 855749,
        referee: 'Jesus Valenzuela, Venezuela',
        timezone: 'UTC',
        date: '2022-11-25T19:00:00+00:00',
        timestamp: 1669402800,
        periods: {
          first: 1669402800,
          second: 1669406400,
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
        id: 855750,
        referee: 'Wilton Pereira Sampaio, Brazil',
        timezone: 'UTC',
        date: '2022-11-26T13:00:00+00:00',
        timestamp: 1669467600,
        periods: {
          first: 1669467600,
          second: 1669471200,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 24,
          name: 'Poland',
          logo: 'https://media.api-sports.io/football/teams/24.png',
          winner: true,
        },
        away: {
          id: 23,
          name: 'Saudi Arabia',
          logo: 'https://media.api-sports.io/football/teams/23.png',
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: 2,
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
        id: 855751,
        referee: 'Szymon Marciniak, Poland',
        timezone: 'UTC',
        date: '2022-11-26T16:00:00+00:00',
        timestamp: 1669478400,
        periods: {
          first: 1669478400,
          second: 1669482000,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 2,
          name: 'France',
          logo: 'https://media.api-sports.io/football/teams/2.png',
          winner: true,
        },
        away: {
          id: 21,
          name: 'Denmark',
          logo: 'https://media.api-sports.io/football/teams/21.png',
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 2,
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
        id: 855752,
        referee: 'Daniele Orsato, Italy',
        timezone: 'UTC',
        date: '2022-11-26T19:00:00+00:00',
        timestamp: 1669489200,
        periods: {
          first: 1669489200,
          second: 1669492800,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 26,
          name: 'Argentina',
          logo: 'https://media.api-sports.io/football/teams/26.png',
          winner: true,
        },
        away: {
          id: 16,
          name: 'Mexico',
          logo: 'https://media.api-sports.io/football/teams/16.png',
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 2,
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
        id: 855753,
        referee: 'Cesar Arturo Ramos Palazuelos, Mexico',
        timezone: 'UTC',
        date: '2022-11-27T13:00:00+00:00',
        timestamp: 1669554000,
        periods: {
          first: 1669554000,
          second: 1669557600,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 1,
          name: 'Belgium',
          logo: 'https://media.api-sports.io/football/teams/1.png',
          winner: false,
        },
        away: {
          id: 31,
          name: 'Morocco',
          logo: 'https://media.api-sports.io/football/teams/31.png',
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
        id: 855754,
        referee: 'Andres Matonte, Uruguay',
        timezone: 'UTC',
        date: '2022-11-27T16:00:00+00:00',
        timestamp: 1669564800,
        periods: {
          first: 1669564800,
          second: 1669568400,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 3,
          name: 'Croatia',
          logo: 'https://media.api-sports.io/football/teams/3.png',
          winner: true,
        },
        away: {
          id: 5529,
          name: 'Canada',
          logo: 'https://media.api-sports.io/football/teams/5529.png',
          winner: false,
        },
      },
      goals: {
        home: 4,
        away: 1,
      },
      score: {
        halftime: {
          home: 2,
          away: 1,
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
        id: 855755,
        referee: 'Danny Desmond Makkelie, Netherlands',
        timezone: 'UTC',
        date: '2022-11-27T19:00:00+00:00',
        timestamp: 1669575600,
        periods: {
          first: 1669575600,
          second: 1669579200,
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
        home: 1,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 1,
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
        id: 855756,
        referee: 'Mohammed Abdulla Hassan Mohamed, United Arab Emirates',
        timezone: 'UTC',
        date: '2022-11-28T10:00:00+00:00',
        timestamp: 1669629600,
        periods: {
          first: 1669629600,
          second: 1669633200,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
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
        home: 3,
        away: 3,
      },
      score: {
        halftime: {
          home: 1,
          away: 2,
        },
        fulltime: {
          home: 3,
          away: 3,
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
        referee: 'Anthony Taylor, England',
        timezone: 'UTC',
        date: '2022-11-28T13:00:00+00:00',
        timestamp: 1669640400,
        periods: {
          first: 1669640400,
          second: 1669644000,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 17,
          name: 'South Korea',
          logo: 'https://media.api-sports.io/football/teams/17.png',
          winner: false,
        },
        away: {
          id: 1504,
          name: 'Ghana',
          logo: 'https://media.api-sports.io/football/teams/1504.png',
          winner: true,
        },
      },
      goals: {
        home: 2,
        away: 3,
      },
      score: {
        halftime: {
          home: 0,
          away: 2,
        },
        fulltime: {
          home: 2,
          away: 3,
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
        referee: 'Ivan Arcides Barton Cisneros, El Salvador',
        timezone: 'UTC',
        date: '2022-11-28T16:00:00+00:00',
        timestamp: 1669651200,
        periods: {
          first: 1669651200,
          second: 1669654800,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 6,
          name: 'Brazil',
          logo: 'https://media.api-sports.io/football/teams/6.png',
          winner: true,
        },
        away: {
          id: 15,
          name: 'Switzerland',
          logo: 'https://media.api-sports.io/football/teams/15.png',
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
        id: 855759,
        referee: 'Alireza Faghani, Iran',
        timezone: 'UTC',
        date: '2022-11-28T19:00:00+00:00',
        timestamp: 1669662000,
        periods: {
          first: 1669662000,
          second: 1669665600,
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 27,
          name: 'Portugal',
          logo: 'https://media.api-sports.io/football/teams/27.png',
          winner: true,
        },
        away: {
          id: 7,
          name: 'Uruguay',
          logo: 'https://media.api-sports.io/football/teams/7.png',
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 2,
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
        id: 855760,
        referee: 'Bakary Papa Gassama, Gambia',
        timezone: 'UTC',
        date: '2022-11-29T15:00:00+00:00',
        timestamp: 1669734000,
        periods: {
          first: 1669734000,
          second: 1669737600,
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
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 1118,
          name: 'Netherlands',
          logo: 'https://media.api-sports.io/football/teams/1118.png',
          winner: true,
        },
        away: {
          id: 1569,
          name: 'Qatar',
          logo: 'https://media.api-sports.io/football/teams/1569.png',
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: 2,
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
        id: 855761,
        referee: 'Clement Turpin, France',
        timezone: 'UTC',
        date: '2022-11-29T15:00:00+00:00',
        timestamp: 1669734000,
        periods: {
          first: 1669734000,
          second: 1669737600,
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
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 2382,
          name: 'Ecuador',
          logo: 'https://media.api-sports.io/football/teams/2382.png',
          winner: false,
        },
        away: {
          id: 13,
          name: 'Senegal',
          logo: 'https://media.api-sports.io/football/teams/13.png',
          winner: true,
        },
      },
      goals: {
        home: 1,
        away: 2,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
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
        id: 855762,
        referee: 'Antonio Mateu, Spain',
        timezone: 'UTC',
        date: '2022-11-29T19:00:00+00:00',
        timestamp: 1669748400,
        periods: {
          first: 1669748400,
          second: 1669752000,
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
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 22,
          name: 'Iran',
          logo: 'https://media.api-sports.io/football/teams/22.png',
          winner: false,
        },
        away: {
          id: 2384,
          name: 'USA',
          logo: 'https://media.api-sports.io/football/teams/2384.png',
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: 0,
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
        id: 855763,
        referee: 'M. Conger',
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
        referee: 'D. Makkelie',
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
        referee: 'M. Oliver',
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
        referee: 'A. Taylor',
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
        referee: 'Raphael Claus',
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
        referee: 'V. Gomes',
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
        referee: 'Ibrahim Al-Jassim Abdulrahman, Qatar',
        timezone: 'UTC',
        date: '2022-11-21T19:00:00+00:00',
        timestamp: 1669057200,
        periods: {
          first: 1669057200,
          second: 1669060800,
        },
        venue: {
          id: null,
          name: 'Ahmed bin Ali Stadium',
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
        home: 1,
        away: 1,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: 1,
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
        id: 866682,
        referee: 'Mario Escobar, Guatemala',
        timezone: 'UTC',
        date: '2022-11-25T10:00:00+00:00',
        timestamp: 1669370400,
        periods: {
          first: 1669370400,
          second: 1669374000,
        },
        venue: {
          id: null,
          name: 'Ahmed bin Ali Stadium',
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 767,
          name: 'Wales',
          logo: 'https://media.api-sports.io/football/teams/767.png',
          winner: false,
        },
        away: {
          id: 22,
          name: 'Iran',
          logo: 'https://media.api-sports.io/football/teams/22.png',
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
        id: 866683,
        referee: 'Slavko Vincic, Slovenia',
        timezone: 'UTC',
        date: '2022-11-29T19:00:00+00:00',
        timestamp: 1669748400,
        periods: {
          first: 1669748400,
          second: 1669752000,
        },
        venue: {
          id: null,
          name: 'Ahmed bin Ali Stadium',
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
        round: 'Group Stage - 3',
      },
      teams: {
        home: {
          id: 767,
          name: 'Wales',
          logo: 'https://media.api-sports.io/football/teams/767.png',
          winner: false,
        },
        away: {
          id: 10,
          name: 'England',
          logo: 'https://media.api-sports.io/football/teams/10.png',
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 3,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 0,
          away: 3,
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
        referee: 'Victor Gomes, South Africa',
        timezone: 'UTC',
        date: '2022-11-22T19:00:00+00:00',
        timestamp: 1669143600,
        periods: {
          first: 1669143600,
          second: 1669147200,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
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
          id: 2,
          name: 'France',
          logo: 'https://media.api-sports.io/football/teams/2.png',
          winner: true,
        },
        away: {
          id: 20,
          name: 'Australia',
          logo: 'https://media.api-sports.io/football/teams/20.png',
          winner: false,
        },
      },
      goals: {
        home: 4,
        away: 1,
      },
      score: {
        halftime: {
          home: 2,
          away: 1,
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
        id: 871851,
        referee: 'Mohammed Abdulla Hassan Mohamed, United Arab Emirates',
        timezone: 'UTC',
        date: '2022-11-23T16:00:00+00:00',
        timestamp: 1669219200,
        periods: {
          first: 1669219200,
          second: 1669222800,
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
          id: 9,
          name: 'Spain',
          logo: 'https://media.api-sports.io/football/teams/9.png',
          winner: true,
        },
        away: {
          id: 29,
          name: 'Costa Rica',
          logo: 'https://media.api-sports.io/football/teams/29.png',
          winner: false,
        },
      },
      goals: {
        home: 7,
        away: 0,
      },
      score: {
        halftime: {
          home: 3,
          away: 0,
        },
        fulltime: {
          home: 7,
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
        id: 871852,
        referee: 'Daniel Siebert, Germany',
        timezone: 'UTC',
        date: '2022-11-26T10:00:00+00:00',
        timestamp: 1669456800,
        periods: {
          first: 1669456800,
          second: 1669460400,
        },
        venue: {
          id: null,
          name: 'Al Janoub Stadium',
          city: 'Al Wakrah',
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 28,
          name: 'Tunisia',
          logo: 'https://media.api-sports.io/football/teams/28.png',
          winner: false,
        },
        away: {
          id: 20,
          name: 'Australia',
          logo: 'https://media.api-sports.io/football/teams/20.png',
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: 0,
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
        id: 871853,
        referee: 'Michael Oliver, England',
        timezone: 'UTC',
        date: '2022-11-27T10:00:00+00:00',
        timestamp: 1669543200,
        periods: {
          first: 1669543200,
          second: 1669546800,
        },
        venue: {
          id: null,
          name: 'Ahmed bin Ali Stadium',
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
        round: 'Group Stage - 2',
      },
      teams: {
        home: {
          id: 12,
          name: 'Japan',
          logo: 'https://media.api-sports.io/football/teams/12.png',
          winner: false,
        },
        away: {
          id: 29,
          name: 'Costa Rica',
          logo: 'https://media.api-sports.io/football/teams/29.png',
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 0,
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
        id: 871854,
        referee: 'M. Ghorbal',
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
        referee: 'S. Frappart',
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
    {
      fixture: {
        id: 976533,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-03T15:00:00+00:00',
        timestamp: 1670079600,
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
        round: 'Round of 16',
      },
      teams: {
        home: {
          id: 1118,
          name: 'Netherlands',
          logo: 'https://media.api-sports.io/football/teams/1118.png',
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
        id: 976534,
        referee: null,
        timezone: 'UTC',
        date: '2022-12-04T19:00:00+00:00',
        timestamp: 1670180400,
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
        round: 'Round of 16',
      },
      teams: {
        home: {
          id: 10,
          name: 'England',
          logo: 'https://media.api-sports.io/football/teams/10.png',
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
  ],
}
