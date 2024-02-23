import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Logo from './index';

describe('Logo Component', () => {
  it('renders the logo link correctly', () => {
    render(<Logo />);
    const logoLink = screen.getByRole('link');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
    expect(logoLink.textContent).toBe('mortcalc.ca');
  });
});
