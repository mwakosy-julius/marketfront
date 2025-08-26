import React from "react";
import {
  Home,
  BarChart3,
  Package,
  MessageSquare,
  DollarSign,
  Settings,
  Workflow,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "tools", label: "My Tools", icon: Package },
    { id: "pipelines", label: "My Pipelines", icon: Workflow },
    { id: "comments", label: "Reviews", icon: MessageSquare },
    { id: "monetize", label: "Monetization", icon: DollarSign },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-900 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">Kaidoku Marketplace</h1>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors mb-1 ${
                activeTab === item.id
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="text-sm text-gray-700">For Creators</div>
      </div>
    </div>
  );
};

export default Sidebar;
