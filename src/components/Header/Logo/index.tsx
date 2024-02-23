import Link from 'next/link';
import React from 'react';

import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link href='/'>mortcalc.ca</Link>
    </div>
  );
};

export default Logo;
