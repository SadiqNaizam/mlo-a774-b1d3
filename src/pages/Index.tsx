import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelCount from '../components/Dashboard/FunnelCount';
import SourceBreakdown from '../components/Dashboard/SourceBreakdown';
import LeadTrackingChart from '../components/Dashboard/LeadTrackingChart';
import ReasonCards from '../components/Dashboard/ReasonCards';

/**
 * DashboardPage component.
 * This is the main page for the dashboard overview.
 * It assembles various data visualization components within the main application layout.
 * The layout structure is defined by the MainAppLayout component, and the content
 * area is populated with organism-level components like charts and stat cards.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The main content area uses a flex container to stack the dashboard sections vertically.
        A gap is used for consistent spacing between sections.
      */}
      <div className="flex flex-col gap-6">
        {/* 
          First row of the dashboard: FunnelCount and SourceBreakdown.
          This uses a responsive grid. On smaller screens (mobile/tablet), they stack vertically.
          On extra-large screens (xl and up), they appear side-by-side in two columns.
        */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <FunnelCount />
          <SourceBreakdown />
        </div>

        {/* Second row: LeadTrackingChart. This component spans the full width. */}
        <LeadTrackingChart />

        {/* Third row: ReasonCards. This component also spans the full width. */}
        <ReasonCards />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
