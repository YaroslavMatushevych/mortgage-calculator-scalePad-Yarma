'use client';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styles from './Select.module.scss';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  type?: string;
  options: Option[];
  register: UseFormRegister<any>;
  error?: string;
  defaultValue?: string | number;
}

const Select: React.FC<SelectProps> = ({
  name,
  type,
  options,
  register,
  defaultValue,
}) => {
  return (
    <select
      id={name}
      className={styles.select}
      defaultValue={defaultValue}
      {...register(name, type ? { valueAsNumber: true } : undefined)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
