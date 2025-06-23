import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header layout component.
 * This component serves as the container for the top header bar of the application.
 * It renders the `TopHeader` feature component which includes the page title, actions, etc.
 *
 * Its styling, including height, stickiness, and background, is defined within the
 * child `TopHeader` component to encapsulate header-specific logic and presentation.
 */
const Header: React.FC = () => {
  return (
    <header>
      {/* 
        The TopHeader component contains all its own styling (h-16, sticky, border, etc.).
        This layout component's role is purely structural, placing the header
        within the overall application layout defined in `MainAppLayout`.
      */}
      <TopHeader />
    </header>
  );
};

export default Header;
