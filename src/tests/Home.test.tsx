import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../pages';

test('home', () => {
  render(<Home />);
  expect(screen.getByText('Next Vitest Boilerplate')).toBeInTheDocument();
});
