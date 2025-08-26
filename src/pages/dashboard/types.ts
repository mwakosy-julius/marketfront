export interface Tool {
  id: string;
  name: string;
  category: string;
  executions: number;
  rating: number;
  lastUpdated: string;
  status: "active" | "pending" | "inactive";
}

export interface Pipeline {
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

export interface ExecutionStats {
  totalExecutions: number;
  activeUsers: number;
  revenue: number;
  successRate: number;
}
