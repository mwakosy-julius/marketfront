import React from "react";
import { TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: string;
}

const Statscard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
}) => (
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

export default Statscard;
