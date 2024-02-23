// NavList.test.js

import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import NavList from './index';

import { NavListItemType } from '@/types';

jest.mock('@/components/Header/NavItem', () => {
  return {
    __esModule: true,
    default: ({ data }: { data: NavListItemType }) => (
      <div data-testid='mockNavItem'>{data.name}</div>
    ),
  };
});

describe('NavList Component', () => {
  const navData = [
    { name: 'Home', link: '/', active: true },
    { name: 'About', link: '/about', active: false },
    { name: 'Contact', link: '/contact', active: true },
  ];

  it('renders a list of nav items', () => {
    render(<NavList data={navData} />);

    const navItems = screen.getAllByTestId('mockNavItem');

    expect(navItems).toHaveLength(navData.length);
    expect(navItems[0]).toHaveTextContent('Home');
    expect(navItems[1]).toHaveTextContent('About');
    expect(navItems[2]).toHaveTextContent('Contact');
  });
});
