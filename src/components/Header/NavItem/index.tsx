import Link from 'next/link';
import React from 'react';

import styles from './NavItem.module.scss';

import { NavListItemType } from '@/types';

interface NavItemProps {
  data: NavListItemType;
}

const NavItem: React.FC<NavItemProps> = ({ data }) => {
  return (
    <Link
      className={
        data.active
          ? `${styles.navLink} ${styles.active}`
          : `${styles.navLink}  ${styles.disabled}`
      }
      href={data.link ? data.link : '#'}
      aria-disabled={!data.active}
      tabIndex={!data.active ? -1 : undefined}
    >
      {data.name}
    </Link>
  );
};

export default NavItem;
