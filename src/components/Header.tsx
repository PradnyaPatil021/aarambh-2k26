import React, { useState } from 'react';
import { ChevronDown, Calendar, Bell, Menu } from 'lucide-react';
import type { UserProfile } from '../data/mock';

interface HeaderProps {
  user: UserProfile;
  selectedPond: string;
  pondsList: string[];
  currentDate: string;
  hasUnreadNotifications: boolean;
  onPondSelect?: (pond: string) => void;
  onOpenMobileMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  selectedPond,
  pondsList,
  currentDate,
  hasUnreadNotifications,
  onPondSelect,
  onOpenMobileMenu,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFFFFF] border-b border-[#E2EEF0] px-6 sm:px-10 py-4 flex items-center justify-between sticky top-0 z-30">
      {/* Left side: Hamburger (mobile), Dashboard title, Pond Dropdown, Date Chip */}
      <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="p-2 -ml-2 rounded-lg text-slate-600 hover:bg-slate-100 sm:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="text-2xl sm:text-[28px] font-bold text-[#0F1F2E] tracking-tight">
          Dashboard
        </h1>

        <div className="flex items-center gap-3">
          {/* Pond 1 dropdown pill */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-[#D5E2EE] rounded-full text-sm font-semibold text-[#0F1F2E] shadow-sm hover:border-[#00686F]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-label="Select pond"
            >
              <span className="w-2 h-2 rounded-full bg-[#00686F]" aria-hidden="true" />
              <span>{selectedPond}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-44 bg-white rounded-xl shadow-lg border border-[#E2EEF0] py-1.5 z-40 animate-in fade-in zoom-in-95 duration-100">
                {pondsList.map((pond) => (
                  <button
                    key={pond}
                    type="button"
                    onClick={() => {
                      onPondSelect?.(pond);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-[#F5F8FD] transition-colors ${
                      pond === selectedPond ? 'text-[#00686F] font-semibold bg-[#EAF2FD]/50' : 'text-[#334155]'
                    }`}
                  >
                    <span>{pond}</span>
                    {pond === selectedPond && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00686F]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date chip */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-[#EAF2FD] text-[#3B5B8A] rounded-lg text-xs font-medium border border-[#D5E4F8]/60">
            <Calendar className="w-3.5 h-3.5 text-[#3B5B8A]" />
            <span>{currentDate}</span>
          </div>
        </div>
      </div>

      {/* Right side: Bell icon, User info */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Bell */}
        <button
          type="button"
          className="relative p-2 text-[#64748B] hover:text-[#0F1F2E] rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20"
          aria-label="View notifications"
        >
          <Bell className="w-5 h-5" />
          {hasUnreadNotifications && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#DC2626] ring-2 ring-white" />
          )}
        </button>

        {/* User Block */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E0EDFA] text-[#00686F] font-bold text-sm flex items-center justify-center border border-[#CFE2F5]">
            {user.initials}
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="text-[14px] font-bold text-[#0F1F2E] leading-tight">
              {user.name}
            </span>
            <span className="text-[12px] text-[#64748B] leading-tight">
              {user.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
