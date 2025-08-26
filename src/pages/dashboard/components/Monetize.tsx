import React from "react";
import { Clock, TrendingUp } from "lucide-react";
import StatsCard from "./Statscard";

const Monetize: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Monetization</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

export default Monetize;
