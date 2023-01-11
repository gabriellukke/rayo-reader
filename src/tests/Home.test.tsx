import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from './test-utils';
import Home from '../pages';

describe('Home page', () => {
  it('renders the page', () => {
    render(<Home />);
    const title = screen.getByText('Rayo Reader');
    expect(title).toBeInTheDocument();

    const textbox = screen.getByRole('textbox');
    expect(textbox).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Read' });
    expect(button).toBeInTheDocument();
  });

  it('can enter text into the textbox and read it', async () => {
    const user = userEvent.setup();

    render(<Home />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Read' });

    await user.type(textbox, 'Hello World');
    expect(textbox).toHaveValue('Hello World');

    await user.click(button);
    expect(textbox).not.toBeInTheDocument();
  });

  it('can speed read the text', async () => {
    render(<Home />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Read' });

    await userEvent.type(textbox, 'Hello World');
    expect(textbox).toHaveValue('Hello World');

    await userEvent.click(button);
    expect(textbox).not.toBeInTheDocument();

    const word = screen.getByText('Hello');
    expect(word).toBeInTheDocument();

    screen.logTestingPlaygroundURL();

    setTimeout(() => {
      const word2 = screen.getByText('World');
      expect(word2).toBeInTheDocument();
    }, 1000);
  }, 10000);
});

