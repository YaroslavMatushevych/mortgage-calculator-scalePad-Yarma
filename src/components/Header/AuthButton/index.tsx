import React from 'react';

import styles from './AuthButton.module.scss';

import Button from '@/components/Button';

const AuthButton: React.FC = () => {
  return (
    <div className={styles.authButtonContainer}>
      <Button className={styles.signInButton} variant='outlined'>
        Sign In
      </Button>
    </div>
  );
};

export default AuthButton;
