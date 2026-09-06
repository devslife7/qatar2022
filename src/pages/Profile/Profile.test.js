import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Profile from './Profile'

test('a direct profile visit returns to the homepage', () => {
  render(
    <MemoryRouter initialEntries={['/profile']}>
      <Routes>
        <Route path='/' element={<div>Legacy homepage</div>} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </MemoryRouter>
  )

  expect(screen.getByText('Legacy homepage')).toBeTruthy()
})

test('a profile opened with participant data still renders', () => {
  render(
    <MemoryRouter initialEntries={[{
      pathname: '/profile',
      state: {
        user: { first_name: 'Test', last_name: 'Participant', predictionsGS: [], rightMatches: 0 },
        fixtures: [],
        officialResults: [],
      },
    }]}>
      <Profile />
    </MemoryRouter>
  )

  expect(screen.getByText(/Test Participant/)).toBeTruthy()
})
