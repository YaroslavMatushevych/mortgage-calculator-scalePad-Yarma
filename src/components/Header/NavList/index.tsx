import React from 'react';

import styles from './NavList.module.scss';

import NavItem from '@/components/Header/NavItem';

import { NavListDataType } from '@/types';

interface NavListProps {
  data: NavListDataType;
}

const NavList: React.FC<NavListProps> = ({ data }) => {
  return (
    <ul className={styles.navList}>
      {data.map((navItem, index) => {
        return <NavItem key={index} data={navItem} />;
      })}
    </ul>
  );
};

export default NavList;
