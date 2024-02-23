import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'outlined' | 'inlined';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'outlined',
  children,
  ...props
}) => {
  const variantClassName = styles[variant];

  return (
    <button
      className={`${styles.button} ${variantClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
