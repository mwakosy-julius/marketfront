import React from "react";
import {
  Package,
  Activity,
  ChevronRight,
  Play,
  BookOpen,
  Upload,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import StatsCard from "./Statscard";

const Home: React.FC = () => {
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

export default Home;
