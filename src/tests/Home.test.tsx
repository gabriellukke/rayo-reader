import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages';

describe('Home page', () => {
  it('renders the page', () => {
    render(<Home />);
    const title = screen.getByText('Rayo Reader');
    expect(title).toBeInTheDocument();
    
    // screen.logTestingPlaygroundURL();
    const textbox = screen.getByRole('textbox');
    expect(textbox).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Read' });
    expect(button).toBeInTheDocument();
  });

  it('can enter text into the textbox and read it', () => {
    render(<Home />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Read' });

    userEvent.type(textbox, 'Hello World');
    expect(textbox).toHaveValue('Hello World');

    userEvent.click(button);
    expect(textbox).not.toBeInTheDocument();
  });

  it('can speed read the text', () => {
    vi.useFakeTimers();

    render(<Home />);
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Read' });

    userEvent.type(textbox, 'Hello World');
    expect(textbox).toHaveValue('Hello World');

    userEvent.click(button);
    expect(textbox).not.toBeInTheDocument();

    const word = screen.getByText('Hello');
    expect(word).toBeInTheDocument();
    
    vi.advanceTimersByTime(300);

    const word2 = screen.getByText('World');
    expect(word2).toBeInTheDocument();
  });
});

