import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import Header from './';

describe('Header Component', () => {
  it('renders the header component with logo, navigation list, and sign in button', () => {
    render(<Header />);

    expect(
      screen.getByRole('link', { name: /mortcalc\.ca/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Mortgage Calculator/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();
  });
});
