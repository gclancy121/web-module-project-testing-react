import React from 'react';
import { render,  screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

test('renders without errors with no props', async () => {
  render(<Display />);
 });

test('renders Show component when the button is clicked ', async () => { 
  render(<Display />);
  const button = screen.getByRole('button'); 
  userEvent.click(button);

  await waitFor(() => {
    const shows = screen.getByTestId('show-container');
    expect(shows).toBeInTheDocument();
  })

});

test('renders show season options matching your data when the button is clicked', async () => {
  render(<Display />);
  const button = screen.getByRole('button'); 
  userEvent.click(button);

  await waitFor(() => {
    const seasons = screen.getAllByTestId('season-option');
    expect(seasons).toHaveLength(4)
  })

 });
