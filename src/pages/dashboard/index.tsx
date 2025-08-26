import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Tools from "./components/Tools";
import Pipelines from "./components/Pipelines";
import Reviews from "./components/Reviews";
import Monetize from "./components/Monetize";
import SettingsPage from "./components/SettingsPage";

const KaidokuDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "analytics":
        return <Analytics />;
      case "tools":
        return <Tools />;
      case "pipelines":
        return <Pipelines />;
      case "comments":
        return <Reviews />;
      case "monetize":
        return <Monetize />;
      case "settings":
        return <SettingsPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>
  );
};

export default KaidokuDashboard;
