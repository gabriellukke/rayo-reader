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
  
  it('can\'t start reading if the textbox is empty', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Read' });

    await user.click(button);
    expect(textbox).toBeInTheDocument();
  });


  it('can speed read the text', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Read' });

    await user.type(textbox, 'Hello World');
    expect(textbox).toHaveValue('Hello World');

    await user.click(button);
    expect(textbox).not.toBeInTheDocument();

    const word = screen.getByText('Hello');
    expect(word).toBeInTheDocument();

    const word2 = await screen.findByText('World');
    expect(word2).toBeInTheDocument();
  });

  it('can stop reading', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Read' });

    await user.type(textbox, 'Hello World');
    expect(textbox).toHaveValue('Hello World');

    await user.click(button);
    expect(textbox).not.toBeInTheDocument();

    const word = screen.getByText('Hello');
    expect(word).toBeInTheDocument();

    const stopButton = screen.getByRole('button', { name: 'Stop' });
    await user.click(stopButton);

    screen.logTestingPlaygroundURL();
    
    const textbox2 = screen.getByRole('textbox');
    expect(textbox2).toBeInTheDocument();
  });
  
  it('can read the text again', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Read' });

    await user.type(textbox, 'Hello World');
    expect(textbox).toHaveValue('Hello World');

    await user.click(button);
    expect(textbox).not.toBeInTheDocument();

    const word = screen.getByText('Hello');
    expect(word).toBeInTheDocument();

    const stopButton = screen.getByRole('button', { name: 'Stop' });
    await user.click(stopButton);

    const textbox2 = screen.getByRole('textbox');
    expect(textbox2).toBeInTheDocument();

    await user.click(button);
    expect(textbox2).not.toBeInTheDocument();

    const word2 = screen.getByText('Hello');
    expect(word2).toBeInTheDocument();

    const word3 = await screen.findByText('World');
    expect(word3).toBeInTheDocument();
  });
});

