export interface UserProfile {
  name: string;
  role: string;
  initials: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  badge?: string | number;
  badgeColor?: 'red' | 'teal';
  children?: { id: string; label: string; active?: boolean }[];
}

export interface AlertBannerData {
  badge: string;
  messagePrefix: string;
  highlightValue: string;
  linkText: string;
}

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  unit?: string;
  badgeChip?: string;
  progressPercent?: number;
  subtext: string;
  trendIcon?: 'up' | 'down';
  iconType: 'feed' | 'clock' | 'cost' | 'growth';
}

export interface FeedingScheduleItem {
  id: string;
  time: string;
  label: string;
  amount: string;
  status: 'COMPLETED' | 'UPCOMING';
  completed: boolean;
}

export interface WaterTelemetry {
  temperature: {
    label: string;
    value: string;
    rangeText: string;
    status: 'Good';
    currentValue: number;
    minRange: number;
    maxRange: number;
  };
  dissolvedOxygen: {
    label: string;
    value: string;
    unit: string;
    rangeText: string;
    status: 'Low';
    currentValue: number;
    optimalThreshold: number;
  };
  footerTelemetry: string;
  footerStatus: string;
}

export interface ActivityItem {
  id: string;
  statusDot: 'teal' | 'red';
  title: string;
  description: string;
  time: string;
}

export interface DashboardMockData {
  user: UserProfile;
  selectedPond: string;
  pondsList: string[];
  currentDate: string;
  hasUnreadNotifications: boolean;
  headline: {
    title: string;
    subtitle: string;
  };
  alertBanner: AlertBannerData;
  kpiMetrics: KpiMetric[];
  feedingPlan: {
    title: string;
    subtitle: string;
    items: FeedingScheduleItem[];
    footerAction: string;
  };
  waterConditions: WaterTelemetry;
  recentActivity: {
    title: string;
    subtitle: string;
    items: ActivityItem[];
    footerAction: string;
  };
  navigation: {
    mainItems: NavItem[];
    footerItems: { label: string; icon: string }[];
  };
}

export const mockDashboardData: DashboardMockData = {
  user: {
    name: "Ramesh K.",
    role: "Farm Manager",
    initials: "RK",
  },
  selectedPond: "Pond 1",
  pondsList: ["Pond 1", "Pond 2", "Pond 3", "Nursery Tank 1"],
  currentDate: "Today, Oct 24",
  hasUnreadNotifications: true,
  headline: {
    title: "Feed smarter. Grow faster.",
    subtitle: "Here's your pond summary for today.",
  },
  alertBanner: {
    badge: "Attention Needed",
    messagePrefix: "Low dissolved oxygen in Pond 1:",
    highlightValue: "4.8 mg/L",
    linkText: "View Alert",
  },
  kpiMetrics: [
    {
      id: "todays-feed",
      label: "TODAY'S FEED",
      value: "3.2",
      unit: "kg",
      progressPercent: 62,
      subtext: "3.2 / 5.2 kg",
      iconType: "feed",
    },
    {
      id: "next-feeding",
      label: "NEXT FEEDING",
      value: "6:00 PM",
      badgeChip: "2.0 kg",
      subtext: "Evening feeding",
      iconType: "clock",
    },
    {
      id: "todays-cost",
      label: "TODAY'S COST",
      value: "₹160",
      subtext: "Estimated feed cost",
      iconType: "cost",
    },
    {
      id: "growth",
      label: "GROWTH",
      value: "+4.5%",
      trendIcon: "up",
      subtext: "Since last measurement",
      iconType: "growth",
    },
  ],
  feedingPlan: {
    title: "Today’s Feeding Plan",
    subtitle: "Pond 1 feeding schedule",
    items: [
      {
        id: "feed-1",
        time: "8:00 AM",
        label: "Morning Feed",
        amount: "2.0 kg",
        status: "COMPLETED",
        completed: true,
      },
      {
        id: "feed-2",
        time: "1:00 PM",
        label: "Afternoon Feed",
        amount: "1.2 kg",
        status: "COMPLETED",
        completed: true,
      },
      {
        id: "feed-3",
        time: "6:00 PM",
        label: "Evening Feed",
        amount: "2.0 kg",
        status: "UPCOMING",
        completed: false,
      },
    ],
    footerAction: "View Full Schedule",
  },
  waterConditions: {
    temperature: {
      label: "Water Temperature",
      value: "27°C",
      rangeText: "Normal range: 26°C – 30°C",
      status: "Good",
      currentValue: 27,
      minRange: 26,
      maxRange: 30,
    },
    dissolvedOxygen: {
      label: "Dissolved Oxygen (DO)",
      value: "4.8",
      unit: "mg/L",
      rangeText: "Optimal: > 5.0 mg/L",
      status: "Low",
      currentValue: 4.8,
      optimalThreshold: 5.0,
    },
    footerTelemetry: "Pond 1 telemetry active",
    footerStatus: "Auto-refreshing",
  },
  recentActivity: {
    title: "Recent Activity",
    subtitle: "Latest logs, pond events, and feeding records",
    items: [
      {
        id: "act-1",
        statusDot: "teal",
        title: "Feeding completed — 2.0 kg",
        description: "Morning scheduled feed recorded",
        time: "8:00 AM",
      },
      {
        id: "act-2",
        statusDot: "teal",
        title: "DO returned to safe level",
        description: "Aerator ran 45 minutes",
        time: "5:16 AM",
      },
      {
        id: "act-3",
        statusDot: "red",
        title: "DO alert detected",
        description: "North corner aerator auto-started",
        time: "4:30 AM",
      },
    ],
    footerAction: "View All Activity",
  },
  navigation: {
    mainItems: [
      { id: "dashboard", label: "Dashboard", icon: "LayoutGrid", active: true },
      { id: "my-ponds", label: "My Ponds", icon: "Waves" },
      {
        id: "feeding",
        label: "Feeding",
        icon: "Package",
        children: [
          { id: "feed-sched", label: "Schedule" },
          { id: "feed-hist", label: "History" },
          { id: "feed-cal", label: "Calendar" },
        ],
      },
      { id: "alerts", label: "Alerts", icon: "Bell", badge: "1", badgeColor: "red" },
      { id: "analytics", label: "Analytics", icon: "BarChart3" },
      { id: "cost", label: "Cost & Savings", icon: "Wallet" },
      { id: "growth", label: "Growth", icon: "TrendingUp" },
      { id: "settings", label: "Settings", icon: "Settings" },
    ],
    footerItems: [
      { label: "Documentation", icon: "HelpCircle" },
      { label: "Support", icon: "Headphones" },
    ],
  },
};
