import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar layout component.
 * This component acts as the main container for the application's sidebar.
 * It is responsible for rendering the primary navigation structure.
 *
 * As per the design, its width and styling are defined within the child `SidebarNav` component.
 * It occupies the first column in the main application grid layout defined in `MainAppLayout`.
 */
const Sidebar: React.FC = () => {
  return (
    <aside>
      {/* 
        The SidebarNav component contains all its specific styling, including width (w-64),
        background, border, and the flex-col layout. This keeps the parent layout component clean
        and focused on structure.
      */}
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
