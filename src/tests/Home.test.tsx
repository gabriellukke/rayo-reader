import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages';

describe('Home page', () => {
  it('renders the page', () => {
    render(<Home />);
    const title = screen.getByText('Rayo Reader');
    expect(title).toBeInTheDocument();
    
    const textbox = screen.getByRole('textbox', { name: 'Enter text here' });
    expect(textbox).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Read' });
    expect(button).toBeInTheDocument();
  });

  it('can enter text into the textbox and read it', () => {
    render(<Home />);
    const textbox = screen.getByRole('textbox', { name: 'Enter text here' });
    const button = screen.getByRole('button', { name: 'Read' });

    userEvent.type(textbox, 'Hello World');
    expect(textbox).toHaveValue('Hello World');

    userEvent.click(button);
    expect(textbox).not.toBeInTheDocument();
  });
});

