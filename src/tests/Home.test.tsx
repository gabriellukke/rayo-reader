import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../pages';

describe('Home page', () => {
  it('renders the page', () => {
    render(<Home />);
    const title = screen.getByText('Rayo Reader');
    expect(title).toBeInTheDocument();
    
    const textbox = screen.getByRole('textbox', { name :'Enter text here' });
    expect(textbox).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Read' });
    expect(button).toBeInTheDocument();
  });
});

