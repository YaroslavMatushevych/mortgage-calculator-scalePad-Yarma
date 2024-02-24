import React from 'react';
import { render, screen } from '@testing-library/react';
import InputForm from './';
import { useForm, FormProvider } from 'react-hook-form';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

//@ts-ignore
const TestForm = ({ typeElement, name, label, options, error }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <InputForm
        typeElement={typeElement}
        name={name}
        label={label}
        options={options}
        register={methods.register}
        error={error}
      />
    </FormProvider>
  );
};

describe('InputForm Component', () => {
  it('renders input element correctly', () => {
    render(
      <TestForm
        typeElement='input'
        name='testInput'
        label='Test Input'
        options={undefined}
        error={undefined}
      />
    );

    expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
  });

  it('renders select element with options correctly', () => {
    render(
      <TestForm
        typeElement='select'
        name='testSelect'
        label='Test Select'
        options={options}
        error={undefined}
      />
    );

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('displays error message correctly', () => {
    const error = { testInput: { message: 'This field is required' } };
    render(
      <TestForm
        typeElement='input'
        name='testInput'
        label='Test Input'
        error={error}
        options={undefined}
      />
    );

    expect(screen.getByText(error.testInput.message)).toBeInTheDocument();
  });
});
