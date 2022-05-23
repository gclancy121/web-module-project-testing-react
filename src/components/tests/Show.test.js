import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const testShow = {
  name: 'Lore of Pandaria',
  summary: 'A show about the lore of the best expansion from WoW',
  seasons: [
    {
      id: 0,
      name: 'Season 1',
      episodes: []
    },
    {
      id: 1,
      name: 'Season 2',
      episodes: []
    }
  ]
}

test('renders without errors', () => { 
  render(<Show show={testShow} selectedSeason={'none'}/>);
});

test('renders Loading component when prop show is null', () => { 
  render(<Show show={null} selectedSeason={'none'} />)

  const loading = screen.getByTestId('loading-container');
  expect(loading).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', () => { 
  render(<Show show={testShow} selectedSeason={'none'} />);

  const options = screen.getAllByTestId('season-option');
  expect(options).toHaveLength(2);
});

test('handleSelect is called when an season is selected', () => {
  render(<Show show={testShow} selectedSeason={'none'} />);
  
  const selectPlace = screen.getByLabelText(/select a season/i);
  expect(selectPlace).toBeInTheDocument();

  userEvent.selectOptions(selectPlace, ['1']);

 });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { 
  const {rerender} = render(<Show show={testShow} selectedSeason={'none'} />);
  let episodes = screen.queryByTestId('episodes-container');
  expect(episodes).not.toBeInTheDocument();

  rerender(<Show show={testShow} selectedSeason={'1'} />)
  episodes=screen.queryByTestId('episodes-container');
  expect(episodes).toBeInTheDocument();
});
