import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import NavItem from './index';

describe('NavItem Component', () => {
  it('renders active nav item correctly', () => {
    const activeItemData = {
      name: 'Active Item',
      link: '/active',
      active: true,
    };

    render(<NavItem data={activeItemData} />);
    const navItem = screen.getByRole('link', { name: 'Active Item' });

    expect(navItem).toHaveClass('navLink');
    expect(navItem).toHaveClass('active');
    expect(navItem).toHaveAttribute('href', '/active');
    expect(navItem).toHaveAttribute('aria-disabled', 'false');
    expect(navItem).not.toHaveAttribute('tabIndex');
  });

  it('renders disabled nav item correctly', () => {
    const disabledItemData = {
      name: 'Disabled Item',
    };

    render(<NavItem data={disabledItemData} />);
    const navItem = screen.getByRole('link', { name: 'Disabled Item' });

    expect(navItem).toHaveClass('navLink');
    expect(navItem).toHaveClass('disabled');
    expect(navItem).toHaveAttribute('href', '#');
    expect(navItem).toHaveAttribute('aria-disabled', 'true');
    expect(navItem).toHaveAttribute('tabIndex', '-1');
  });
});
