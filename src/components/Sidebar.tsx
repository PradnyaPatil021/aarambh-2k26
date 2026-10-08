import React, { useState } from 'react';
import {
  LayoutGrid,
  Waves,
  Layers,
  Bell,
  BarChart3,
  Wallet,
  TrendingUp,
  Settings,
  HelpCircle,
  Headphones,
  ChevronDown,
  X
} from 'lucide-react';
import type { NavItem } from '../data/mock';
interface SidebarProps {
  navItems: NavItem[];
  footerItems: { label: string; icon: string }[];
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen = false,
  onClose,
}) => {
  const [feedingExpanded, setFeedingExpanded] = useState(true);

  const renderIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className={className} />;
      case 'Waves':
        return <Waves className={className} />;
      case 'Package':
      case 'Layers':
        return <Layers className={className} />;
      case 'Bell':
        return <Bell className={className} />;
      case 'BarChart3':
        return <BarChart3 className={className} />;
      case 'Wallet':
        return <Wallet className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Settings':
        return <Settings className={className} />;
      case 'HelpCircle':
        return <HelpCircle className={className} />;
      case 'Headphones':
        return <Headphones className={className} />;
      default:
        return <LayoutGrid className={className} />;
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm sm:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        id="sidebar"
        className={`fixed sm:sticky top-0 left-0 z-50 h-screen w-[320px] shrink-0 bg-[#E6F0FA] flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out border-r border-[#D9E6F5] overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
          }`}
        aria-label="Sidebar Navigation"
      >
        <div>
          {/* Logo & Mobile Close */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#D4ECE9] flex items-center justify-center text-[#00686F] shadow-sm">
                <Waves className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[26px] font-extrabold tracking-tight text-[#00686F] leading-none">
                  AquaFeed
                </span>
                <span className="text-[11px] font-medium text-[#64748B] tracking-wide mt-1">
                  Aquaculture Intelligence
                </span>
              </div>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-800 sm:hidden"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 space-y-1.5" aria-label="Main Navigation">
            {/* Dashboard (Active) */}
            <a
              href="#dashboard"
              className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-[#00686F] text-white font-medium text-[15px] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#00686F]/40"
              aria-current="page"
            >
              <LayoutGrid className="w-5 h-5 shrink-0" />
              <span>Dashboard</span>
            </a>

            {/* My Ponds */}
            <a
              href="#ponds"
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[#334155] hover:text-[#0F1F2E] hover:bg-white/50 font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
            >
              <Waves className="w-5 h-5 shrink-0 text-[#475569]" />
              <span>My Ponds</span>
            </a>

            {/* Feeding (Expandable) */}
            <div>
              <button
                type="button"
                onClick={() => setFeedingExpanded(!feedingExpanded)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[#334155] hover:text-[#0F1F2E] hover:bg-white/50 font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
                aria-expanded={feedingExpanded}
              >
                <div className="flex items-center gap-3.5">
                  <Layers className="w-5 h-5 shrink-0 text-[#475569]" />
                  <span>Feeding</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#64748B] transition-transform duration-200 ${feedingExpanded ? 'rotate-0' : '-rotate-90'
                    }`}
                />
              </button>

              {/* Sub-items */}
              {feedingExpanded && (
                <div className="pl-12 pr-4 pt-1.5 pb-2 space-y-2">
                  <a
                    href="#feeding-schedule"
                    className="block text-[14px] text-[#334155] hover:text-[#00686F] font-normal transition-colors py-0.5"
                  >
                    Schedule
                  </a>
                  <a
                    href="#feeding-history"
                    className="block text-[14px] text-[#64748B] hover:text-[#00686F] font-normal transition-colors py-0.5"
                  >
                    History
                  </a>
                  <a
                    href="#feeding-calendar"
                    className="block text-[14px] text-[#64748B] hover:text-[#00686F] font-normal transition-colors py-0.5"
                  >
                    Calendar
                  </a>
                </div>
              )}
            </div>

            {/* Alerts with Badge */}
            <a
              href="#alerts"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[#334155] hover:text-[#0F1F2E] hover:bg-white/50 font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
            >
              <div className="flex items-center gap-3.5">
                <Bell className="w-5 h-5 shrink-0 text-[#475569]" />
                <span>Alerts</span>
              </div>
              <span className="w-5 h-5 rounded-full bg-[#FEE2E2] text-[#DC2626] font-semibold text-[11px] flex items-center justify-center">
                1
              </span>
            </a>

            {/* Analytics */}
            <a
              href="#analytics"
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[#334155] hover:text-[#0F1F2E] hover:bg-white/50 font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
            >
              <BarChart3 className="w-5 h-5 shrink-0 text-[#475569]" />
              <span>Analytics</span>
            </a>

            {/* Cost & Savings */}
            <a
              href="#cost"
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[#334155] hover:text-[#0F1F2E] hover:bg-white/50 font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
            >
              <Wallet className="w-5 h-5 shrink-0 text-[#475569]" />
              <span>Cost & Savings</span>
            </a>

            {/* Growth */}
            <a
              href="#growth"
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[#334155] hover:text-[#0F1F2E] hover:bg-white/50 font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
            >
              <TrendingUp className="w-5 h-5 shrink-0 text-[#475569]" />
              <span>Growth</span>
            </a>

            {/* Settings */}
            <a
              href="#settings"
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[#334155] hover:text-[#0F1F2E] hover:bg-white/50 font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
            >
              <Settings className="w-5 h-5 shrink-0 text-[#475569]" />
              <span>Settings</span>
            </a>
          </nav>
        </div>

        {/* Bottom items */}
        <div className="pt-4 mt-auto">
          <div className="h-px bg-[#D0DFEF] mb-3" />
          <nav className="space-y-1" aria-label="Support Links">
            <a
              href="#docs"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-[14px] text-[#64748B] hover:text-[#0F1F2E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
            >
              {renderIcon('HelpCircle', 'w-4 h-4 text-[#64748B]')}
              <span>Documentation</span>
            </a>
            <a
              href="#support"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-[14px] text-[#64748B] hover:text-[#0F1F2E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
            >
              {renderIcon('Headphones', 'w-4 h-4 text-[#64748B]')}
              <span>Support</span>
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
};
