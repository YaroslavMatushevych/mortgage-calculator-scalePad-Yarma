import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Input from './';

describe('Input Component', () => {
  test('renders correctly with placeholder', () => {
    const registerMock = jest.fn().mockReturnValue({
      onChange: jest.fn(),
      onBlur: jest.fn(),
      ref: jest.fn(),
    });

    render(
      <Input
        name='testInput'
        type='text'
        register={registerMock}
        placeholder='Test input'
      />
    );

    const inputElement = screen.getByPlaceholderText('Test input');
    expect(inputElement).toBeInTheDocument();
    expect(registerMock).toHaveBeenCalled();
  });
});
