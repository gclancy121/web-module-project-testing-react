import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';


const testEpisode = {
  id: 1,
  name: 'test',
  image: null,
  season: 1,
  number: 1,
  summary: 'this show sucks lmao',
  runtime: 100
}

test("renders without error", () => { 
  render(<Episode  episode={testEpisode}/>);
});

test("renders the summary test passed as prop", () => {
  render(<Episode  episode={testEpisode}/>);
  const summary = screen.getByText('this show sucks lmao');
  expect(summary).toBeInTheDocument();
  expect(summary).not.toBeNull();
  expect(summary).toBeTruthy();

 });

test("renders default image when image is not defined", () => { 
  render(<Episode episode={testEpisode} />);

  const image = screen.getByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');

  expect(image).toBeInTheDocument();

});
