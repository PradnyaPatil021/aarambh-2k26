import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { AlertBanner } from './components/AlertBanner';
import { KpiCard } from './components/KpiCard';
import { FeedingPlan } from './components/FeedingPlan';
import { WaterConditions } from './components/WaterConditions';
import { RecentActivity } from './components/RecentActivity';
import { mockDashboardData } from './data/mock';

export const App: React.FC = () => {
  const [data, setData] = useState(mockDashboardData);
  const [showAlert, setShowAlert] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleFeedItem = (id: string) => {
    setData((prev) => ({
      ...prev,
      feedingPlan: {
        ...prev.feedingPlan,
        items: prev.feedingPlan.items.map((item) =>
          item.id === id
            ? {
                ...item,
                completed: !item.completed,
                status: !item.completed ? 'COMPLETED' : 'UPCOMING',
              }
            : item
        ),
      },
    }));
  };

  const handlePondSelect = (pond: string) => {
    setData((prev) => ({
      ...prev,
      selectedPond: pond,
    }));
  };

  return (
    <div className="min-h-screen w-full flex bg-[#F5F8FD]">
      {/* 1. Left Sidebar (Fixed 320px, Sticky) */}
      <Sidebar
        navItems={data.navigation.mainItems}
        footerItems={data.navigation.footerItems}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* 2. Right Side: Top Header + Main Content */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Top Header */}
        <Header
          user={data.user}
          selectedPond={data.selectedPond}
          pondsList={data.pondsList}
          currentDate={data.currentDate}
          hasUnreadNotifications={data.hasUnreadNotifications}
          onPondSelect={handlePondSelect}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
        />

        {/* Main Scrollable Content */}
        <main className="flex-1 px-4 sm:px-8 lg:px-10 py-7 max-w-[1600px] w-full mx-auto space-y-6">
          {/* Headline (Fixed static text, no time-based greeting) */}
          <section aria-labelledby="dashboard-headline">
            <h2
              id="dashboard-headline"
              className="text-[32px] sm:text-[36px] font-extrabold text-[#0F1F2E] tracking-tight leading-tight"
            >
              {data.headline.title}
            </h2>
            <p className="text-[15px] text-[#64748B] mt-1">
              {data.headline.subtitle}
            </p>
          </section>

          {/* Alert Banner (Dismissible) */}
          {showAlert && (
            <section aria-label="Urgent Alerts">
              <AlertBanner
                data={data.alertBanner}
                onDismiss={() => setShowAlert(false)}
                onViewAlert={() => alert('Opening DO Alert details for Pond 1')}
              />
            </section>
          )}

          {/* KPI Row (4 equal cards) */}
          <section
            aria-label="Key Performance Indicators"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {data.kpiMetrics.map((metric) => (
              <KpiCard key={metric.id} metric={metric} />
            ))}
          </section>

          {/* Middle Row (Feeding Plan ~60%, Water Conditions ~40%, Equal Height) */}
          <section
            aria-label="Pond Operations and Telemetry"
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            <div className="lg:col-span-7 h-full flex flex-col">
              <FeedingPlan
                title={data.feedingPlan.title}
                subtitle={data.feedingPlan.subtitle}
                items={data.feedingPlan.items}
                footerAction={data.feedingPlan.footerAction}
                onToggleItem={handleToggleFeedItem}
                onViewSchedule={() => alert('View full schedule clicked')}
              />
            </div>
            <div className="lg:col-span-5 h-full flex flex-col">
              <WaterConditions telemetry={data.waterConditions} />
            </div>
          </section>

          {/* Recent Activity (Full-width card) */}
          <section aria-label="Recent Activity Log">
            <RecentActivity
              title={data.recentActivity.title}
              subtitle={data.recentActivity.subtitle}
              items={data.recentActivity.items}
              footerAction={data.recentActivity.footerAction}
              onViewAll={() => alert('View all activity clicked')}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
