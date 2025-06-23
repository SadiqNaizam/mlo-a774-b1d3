import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

// Define the props interface for the layout component.
// It must accept children to render the main page content.
interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * Main application layout component.
 * This component defines the primary structure of the dashboard, including a fixed sidebar,
 * a sticky header, and a main content area.
 * It uses a CSS grid for the sidebar/main content split, adhering to the layout requirements.
 *
 * @param {MainAppLayoutProps} props - The component props.
 * @param {React.ReactNode} props.children - The page content to be rendered inside the main area.
 * @returns {React.ReactElement} The rendered main application layout.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    // The root container uses a grid to create the sidebar and main content columns.
    // `grid-cols-[auto_1fr]` allocates width to the sidebar based on its content (`w-64`)
    // and gives the remaining space to the main content area.
    // `h-screen` ensures the layout fills the entire viewport height.
    <div className="grid h-screen grid-cols-[auto_1fr] bg-background text-foreground">
      
      {/* Sidebar Column: Placed in the first column of the grid. */}
      <Sidebar />

      {/* Main Area (Header + Content) */}
      {/* This container uses flexbox to arrange the header and the main scrollable content vertically. */}
      {/* `overflow-hidden` is crucial to prevent the whole page from scrolling when the main content overflows. */}
      <div className="flex flex-col overflow-hidden">
        
        {/* Header Section: The Header component is sticky within this flex container. */}
        <Header />

        {/* Main Content Area */}
        {/* `flex-1` allows this area to grow and fill available space. */}
        {/* `overflow-y-auto` enables vertical scrolling only for the main content, not the sidebar or header. */}
        {/* Padding is added for content spacing. */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
