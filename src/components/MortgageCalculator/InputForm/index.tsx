'use client';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './InputForm.module.scss';

import Input from '@/components/Input';
import Select from '@/components/Select';

interface Option {
  value: string | number;
  label: string;
}
// For the future refactor
// 1. I'd get rid off any ts-ignore by TS types changes.
// 2. Clean up props, order it.
// 3. Remove any, particularly here it's ok but anyway it would be cleaner
// 4. Refactor jsx structure. Decompose Label for instance
// 5. Move option to types, we use it in a couple of places already
type FormInputType =
  | React.SelectHTMLAttributes<HTMLSelectElement>
  | React.SelectHTMLAttributes<HTMLSelectElement>;
interface FormInputProps extends FormInputType {
  typeElement: 'input' | 'select';
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  options?: Option[];
  error?: {
    [key: string]: any | undefined;
  };
  prefix?: string;
  placeholder?: string;
}

const InputForm: React.FC<FormInputProps> = ({
  typeElement,
  name,
  label,
  type,
  register,
  options,
  error,
  prefix,
  placeholder,
  ...props
}) => {
  const errorMessage = error && error[name] ? error[name]?.message || '' : null;

  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelContainer}>
        {prefix && <span>{prefix}</span>}
        <label htmlFor={name} style={prefix ? {} : { marginLeft: '25px' }}>
          {label}
        </label>
      </div>
      {typeElement === 'input' && (
        <div className={styles.inputAndErrorMessageContainer}>
          {/* @ts-ignore */}
          <Input
            id={name}
            name={name}
            register={register}
            type={type}
            placeholder={placeholder}
            {...props}
          />
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </div>
      )}
      {typeElement === 'select' && options && (
        <div className={styles.inputAndErrorMessageContainer}>
          {/* @ts-ignore */}
          <Select
            id={name}
            name={name}
            type={type}
            register={register}
            error={errorMessage || undefined}
            options={options}
            {...props}
          />
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default InputForm;
