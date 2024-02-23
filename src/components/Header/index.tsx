import React from 'react';

import styles from './Header.module.scss';

import AuthButton from '@/components/Header/AuthButton';
import Logo from '@/components/Header/Logo';
import NavList from '@/components/Header/NavList';

import { navListData } from '@/constant/mockData';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Logo />
        <NavList data={navListData} />
        <AuthButton />
      </nav>
    </header>
  );
};

export default Header;
