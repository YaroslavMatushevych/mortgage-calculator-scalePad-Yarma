import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

describe('Select Component', () => {
  const mockRegister = jest.fn();

  it('renders correctly with options', () => {
    render(
      <Select name='testSelect' options={options} register={mockRegister} />
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('renders with a default value', () => {
    render(
      <Select
        name='testSelect'
        options={options}
        register={mockRegister}
        defaultValue='2'
      />
    );

    expect(screen.getByRole('combobox')).toHaveValue('2');
  });
});
