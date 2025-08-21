import React, { useState, useEffect } from "react";
import {
  Home,
  BarChart3,
  Package,
  MessageSquare,
  DollarSign,
  Settings,
  Plus,
  TrendingUp,
  Users,
  Clock,
  Play,
  Upload,
  BookOpen,
  ChevronRight,
  Activity,
  GitBranch,
  Workflow,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Types
interface Tool {
  id: string;
  name: string;
  category: string;
  executions: number;
  rating: number;
  lastUpdated: string;
  status: "active" | "pending" | "inactive";
}

interface Pipeline {
  id: string;
  name: string;
  description: string;
  tools: string[];
  executions: number;
  rating: number;
  lastUpdated: string;
  status: "active" | "pending" | "inactive";
  complexity: "simple" | "moderate" | "complex";
  estimatedRuntime: string;
}

interface ExecutionStats {
  totalExecutions: number;
  activeUsers: number;
  revenue: number;
  successRate: number;
}

// Mock data
const mockTools: Tool[] = [
  {
    id: "1",
    name: "FastQC Quality Control",
    category: "Quality Control",
    executions: 1250,
    rating: 4.8,
    lastUpdated: "2024-08-15",
    status: "active",
  },
  {
    id: "2",
    name: "BLAST Sequence Alignment",
    category: "Sequence Analysis",
    executions: 890,
    rating: 4.6,
    lastUpdated: "2024-08-10",
    status: "active",
  },
  {
    id: "3",
    name: "Genome Assembly Pipeline",
    category: "Assembly",
    executions: 445,
    rating: 4.9,
    lastUpdated: "2024-08-18",
    status: "pending",
  },
];

const mockPipelines: Pipeline[] = [
  {
    id: "1",
    name: "RNA-seq Analysis Pipeline",
    description:
      "Complete RNA sequencing analysis from raw reads to differential expression",
    tools: ["FastQC", "STAR Aligner", "featureCounts", "DESeq2"],
    executions: 342,
    rating: 4.7,
    lastUpdated: "2024-08-18",
    status: "active",
    complexity: "complex",
    estimatedRuntime: "2-4 hours",
  },
  {
    id: "2",
    name: "Variant Calling Pipeline",
    description: "Identify genetic variants from whole genome sequencing data",
    tools: ["BWA-MEM", "GATK", "VEP", "SnpEff"],
    executions: 156,
    rating: 4.5,
    lastUpdated: "2024-08-12",
    status: "active",
    complexity: "complex",
    estimatedRuntime: "3-6 hours",
  },
  {
    id: "3",
    name: "Metagenomic Analysis",
    description: "Analyze microbial communities from environmental samples",
    tools: ["Kraken2", "Bracken", "QIIME2", "LEfSe"],
    executions: 89,
    rating: 4.8,
    lastUpdated: "2024-08-14",
    status: "pending",
    complexity: "moderate",
    estimatedRuntime: "1-3 hours",
  },
];

const mockStats: ExecutionStats = {
  totalExecutions: 2585,
  activeUsers: 156,
  revenue: 1240.5,
  successRate: 94.2,
};

// Components
const Sidebar: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ activeTab, setActiveTab }) => {
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
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold">Kaidoku Marketplace</h1>
      </div>

      <div className="p-4">{/* Removed "New Tool" button */}</div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors mb-1 ${
                activeTab === item.id
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="text-sm text-gray-400">For Creators</div>
      </div>
    </div>
  );
};

const StatsCard: React.FC<{
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: string;
}> = ({ title, value, subtitle, icon, trend }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      <div className="text-gray-400">{icon}</div>
    </div>
    {trend && (
      <div className="mt-3 text-sm text-green-600 flex items-center gap-1">
        <TrendingUp size={16} />
        {trend}
      </div>
    )}
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <Package size={24} className="text-gray-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                My Marketplace
              </h1>
              <p className="text-gray-600 flex items-center gap-2">
                <Activity size={16} />
                Publish tools so researchers can find your solutions
              </p>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  0/3
                </div>
                <span className="text-gray-600">Get ready to</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Launch your tools
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      Finish setting up your marketplace
                    </h3>
                    <p className="text-sm text-gray-600">
                      Continue right where you left off
                    </p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-medium">Verify your email address</h3>
                    <p className="text-sm text-gray-600">
                      Check your email for a verification link
                    </p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-medium">Publish a tool</h3>
                    <p className="text-sm text-gray-600">
                      Add your first bioinformatics tool or pipeline
                    </p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="ml-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-medium mb-4">Quick guides</h3>
                <div className="space-y-3">
                  <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900">
                    <Play size={16} />
                    Tour your marketplace on Kaidoku
                  </button>
                  <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900">
                    <BookOpen size={16} />
                    Learn about tool packaging
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats */}
          <div>
            <h3 className="text-lg font-medium mb-4">On Kaidoku</h3>
            <p className="text-sm text-gray-500 mb-4">Last 30 days</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <StatsCard
                title="Executions"
                value="--"
                icon={<Play size={24} />}
              />
              <StatsCard
                title="Usage hours"
                value="--"
                icon={<Clock size={24} />}
              />
              <StatsCard
                title="Active users"
                value="--"
                icon={<Users size={24} />}
              />
              <StatsCard
                title="Success rate"
                value="--"
                icon={<TrendingUp size={24} />}
              />
            </div>

            {/* Chart placeholder */}
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Usage analytics will appear here</p>
            </div>
          </div>

          {/* Latest Tools */}
          <div>
            <h3 className="text-lg font-medium mb-4">Latest tools</h3>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload size={24} className="text-blue-600" />
              </div>
              <p className="text-center font-medium mb-2">
                Recent tool info will appear here
              </p>
              <p className="text-center text-sm text-gray-600 mb-4">
                To get data and insights, upload and publish your first tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Executions"
            value={mockStats.totalExecutions.toLocaleString()}
            trend="+12% from last month"
            icon={<Play size={24} />}
          />
          <StatsCard
            title="Active Users"
            value={mockStats.activeUsers}
            trend="+8% from last month"
            icon={<Users size={24} />}
          />
          <StatsCard
            title="Revenue"
            value={`$${mockStats.revenue.toFixed(2)}`}
            trend="+23% from last month"
            icon={<DollarSign size={24} />}
          />
          <StatsCard
            title="Success Rate"
            value={`${mockStats.successRate}%`}
            trend="+2% from last month"
            icon={<TrendingUp size={24} />}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Usage Over Time</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                Usage chart will be displayed here
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Tool Categories</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                Category breakdown chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolsPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Tools</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={20} />
            Upload Tool
          </button>
        </div>

        {/* Tools List */}
        <div className="space-y-4">
          {mockTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{tool.name}</h3>
                    <p className="text-sm text-gray-600">{tool.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Executions</p>
                    <p className="font-medium">
                      {tool.executions.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Rating</p>
                    <p className="font-medium">★ {tool.rating}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Status</p>
                    <span
                      className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        tool.status === "active"
                          ? "bg-green-100 text-green-800"
                          : tool.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Settings size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PipelinesPage: React.FC = () => {
  const [expandedPipeline, setExpandedPipeline] = useState<string | null>(null);

  const togglePipeline = (pipelineId: string) => {
    setExpandedPipeline(expandedPipeline === pipelineId ? null : pipelineId);
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "simple":
        return "bg-green-100 text-green-800";
      case "moderate":
        return "bg-yellow-100 text-yellow-800";
      case "complex":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Pipelines</h1>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <GitBranch size={20} />
            Create Pipeline
          </button>
        </div>

        {/* Pipelines List */}
        <div className="space-y-4">
          {mockPipelines.map((pipeline) => (
            <div
              key={pipeline.id}
              className="bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Workflow size={20} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-900">
                          {pipeline.name}
                        </h3>
                        <span
                          className={`inline-flex px-2 py-1 text-xs rounded-full ${getComplexityColor(pipeline.complexity)}`}
                        >
                          {pipeline.complexity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {pipeline.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        Est. runtime: {pipeline.estimatedRuntime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Executions</p>
                      <p className="font-medium">
                        {pipeline.executions.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="font-medium">★ {pipeline.rating}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Status</p>
                      <span
                        className={`inline-flex px-2 py-1 text-xs rounded-full ${
                          pipeline.status === "active"
                            ? "bg-green-100 text-green-800"
                            : pipeline.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {pipeline.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => togglePipeline(pipeline.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {expandedPipeline === pipeline.id ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Settings size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Pipeline Details */}
              {expandedPipeline === pipeline.id && (
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Pipeline Components
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    {pipeline.tools.map((tool, index) => (
                      <React.Fragment key={tool}>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tool}
                        </div>
                        {index < pipeline.tools.length - 1 && (
                          <ChevronRight size={16} className="text-gray-400" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Edit Pipeline
                    </button>
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                      View Workflow
                    </button>
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Run Test
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ReviewsPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Reviews & Feedback
        </h1>

        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <MessageSquare size={48} className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No reviews yet</h3>
          <p className="text-gray-600">
            Reviews from users will appear here once your tools are published
            and used.
          </p>
        </div>
      </div>
    </div>
  );
};

const MonetizePage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Monetization</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Earnings"
            value={`$${mockStats.revenue.toFixed(2)}`}
            subtitle="This month"
            icon={<DollarSign size={24} />}
          />
          <StatsCard
            title="Pending Payout"
            value="$0.00"
            subtitle="Available soon"
            icon={<Clock size={24} />}
          />
          <StatsCard
            title="Total Payouts"
            value="$0.00"
            subtitle="All time"
            icon={<TrendingUp size={24} />}
          />
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium mb-4">Pricing Settings</h3>
          <p className="text-gray-600 mb-4">
            Configure how you want to monetize your tools.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-2">Per-Execution Pricing</h4>
              <p className="text-sm text-gray-600 mb-3">
                Charge users for each time they run your tool
              </p>
              <input
                type="number"
                placeholder="$0.00"
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg"
                step="0.01"
              />
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-2">Subscription Pricing</h4>
              <p className="text-sm text-gray-600 mb-3">
                Monthly recurring access to your tools
              </p>
              <input
                type="number"
                placeholder="$0.00"
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg"
                step="0.01"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium mb-4">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium mb-4">
              Notification Preferences
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">
                  Email notifications for new reviews
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">
                  Email notifications for tool executions
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Monthly analytics reports</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium mb-4">API Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API Key
                </label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value="•••••••••••••••••••••••••••••••••••••••"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    readOnly
                  />
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    Regenerate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const KaidokuDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "analytics":
        return <AnalyticsPage />;
      case "tools":
        return <ToolsPage />;
      case "pipelines":
        return <PipelinesPage />;
      case "comments":
        return <ReviewsPage />;
      case "monetize":
        return <MonetizePage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <HomePage />;
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
