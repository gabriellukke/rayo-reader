import { render, screen, within } from '@testing-library/react';
import Home from '../pages';

test('home', () => {
  render(<Home />);
  expect(screen.getByText('Next Vitest Boilerplate')).toBeInTheDocument();
});
