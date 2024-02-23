import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import AuthButton from './';

describe('AuthButton Component', () => {
  it('renders the AuthButton component with sign in button', () => {
    render(<AuthButton />);

    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();
  });
});
