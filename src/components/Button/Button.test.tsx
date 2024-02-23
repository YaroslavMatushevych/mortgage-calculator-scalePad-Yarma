import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Button from './';

describe('Button Component', () => {
  test('renders the Button component with children', () => {
    render(<Button variant='outlined'>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('applies the outlined variant class', () => {
    render(<Button variant='outlined'>Outlined</Button>);
    expect(screen.getByRole('button')).toHaveClass('outlined');
  });

  test('applies the inlined variant class', () => {
    render(<Button variant='inlined'>Inlined</Button>);
    expect(screen.getByRole('button')).toHaveClass('inlined');
  });

  test('applies additional className', () => {
    render(
      <Button variant='outlined' className='extra-class'>
        Extra Class
      </Button>
    );
    expect(screen.getByRole('button')).toHaveClass('extra-class');
  });
});
