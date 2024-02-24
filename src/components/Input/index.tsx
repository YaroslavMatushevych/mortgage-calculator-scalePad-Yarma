'use client';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './Input.module.scss';

// props and their order is matter of refactor later to easier edit it later
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  register,
  placeholder = '',
  ...props
}) => {
  return (
    <input
      id={name}
      className={styles.input}
      type={type}
      {...register(name, type ? { valueAsNumber: true } : undefined)}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
