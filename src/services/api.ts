// src/services/api.ts

// Types
export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: string;
  author: string;
  authorEmail?: string;
  rating: number;
  ratingCount: number;
  downloads: number;
  views: number;
  lastUpdated: string;
  createdAt: string;
  tags: string[];
  version: string;
  license: string;
  documentation?: string;
  repository?: string;
  homepage?: string;
  image?: string;
  screenshots?: string[];
  featured?: boolean;
  verified?: boolean;
  requirements?: string[];
  installCommand?: string;
  usageExample?: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  description?: string;
}

export interface ApiResponse<T> {
  data: T;
  total?: number;
  page?: number;
  limit?: number;
  message?: string;
}

export interface ApiError {
  error: string;
  message: string;
  status?: number;
}

// API Service Class
export class MarketplaceAPI {
  private baseUrl: string;
  private authToken: string | null = null;

  constructor(
    baseUrl: string = process.env.REACT_APP_API_URL ||
      "http://localhost:8000/api",
  ) {
    this.baseUrl = baseUrl.replace(/\/$/, ""); // Remove trailing slash
  }

  // Auth methods
  setAuthToken(token: string) {
    this.authToken = token;
    // Optional: Store in localStorage for persistence
    localStorage.setItem("auth_token", token);
  }

  getAuthToken(): string | null {
    if (!this.authToken) {
      // Try to get from localStorage
      this.authToken = localStorage.getItem("auth_token");
    }
    return this.authToken;
  }

  clearAuthToken() {
    this.authToken = null;
    localStorage.removeItem("auth_token");
  }

  // Private method for making requests
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    // Add auth header if token exists
    const token = this.getAuthToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);

      // Handle different response types
      const contentType = response.headers.get("content-type");
      let data: any;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        // Handle API errors
        const error: ApiError = {
          error: `HTTP ${response.status}`,
          message: data.message || data.error || "An error occurred",
          status: response.status,
        };
        throw error;
      }

      return data;
    } catch (error) {
      console.error(`API request failed: ${url}`, error);

      if (error instanceof TypeError && error.message.includes("fetch")) {
        // Network error
        throw {
          error: "Network Error",
          message:
            "Unable to connect to the server. Please check your internet connection.",
        } as ApiError;
      }

      throw error;
    }
  }

  // Tools endpoints
  async getTools(params?: {
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    featured?: boolean;
    verified?: boolean;
  }): Promise<ApiResponse<Tool[]>> {
    const searchParams = new URLSearchParams();

    if (params?.category && params.category !== "all") {
      searchParams.append("category", params.category);
    }
    if (params?.search) {
      searchParams.append("search", params.search);
    }
    if (params?.page) {
      searchParams.append("page", params.page.toString());
    }
    if (params?.limit) {
      searchParams.append("limit", params.limit.toString());
    }
    if (params?.sortBy) {
      searchParams.append("sort_by", params.sortBy);
    }
    if (params?.sortOrder) {
      searchParams.append("sort_order", params.sortOrder);
    }
    if (params?.featured !== undefined) {
      searchParams.append("featured", params.featured.toString());
    }
    if (params?.verified !== undefined) {
      searchParams.append("verified", params.verified.toString());
    }

    const queryString = searchParams.toString();
    const endpoint = `/tools${queryString ? `?${queryString}` : ""}`;

    return this.request<ApiResponse<Tool[]>>(endpoint);
  }

  async getTool(id: string): Promise<Tool> {
    return this.request<Tool>(`/tools/${id}`);
  }

  async getFeaturedTools(limit?: number): Promise<Tool[]> {
    const params = limit ? `?limit=${limit}` : "";
    const response = await this.request<ApiResponse<Tool[]>>(
      `/tools/featured${params}`,
    );
    return response.data;
  }

  async createTool(toolData: Partial<Tool>): Promise<Tool> {
    return this.request<Tool>("/tools", {
      method: "POST",
      body: JSON.stringify(toolData),
    });
  }

  async updateTool(id: string, toolData: Partial<Tool>): Promise<Tool> {
    return this.request<Tool>(`/tools/${id}`, {
      method: "PUT",
      body: JSON.stringify(toolData),
    });
  }

  async deleteTool(id: string): Promise<void> {
    await this.request<void>(`/tools/${id}`, {
      method: "DELETE",
    });
  }

  // Analytics endpoints
  async incrementDownloads(toolId: string): Promise<void> {
    await this.request(`/tools/${toolId}/download`, {
      method: "POST",
    });
  }

  async incrementViews(toolId: string): Promise<void> {
    await this.request(`/tools/${toolId}/view`, {
      method: "POST",
    });
  }

  async rateTool(toolId: string, rating: number): Promise<void> {
    await this.request(`/tools/${toolId}/rate`, {
      method: "POST",
      body: JSON.stringify({ rating }),
    });
  }

  async getToolAnalytics(toolId: string): Promise<{
    downloads: number;
    views: number;
    rating: number;
    ratingCount: number;
  }> {
    return this.request(`/tools/${toolId}/analytics`);
  }

  // Categories endpoints
  async getCategories(): Promise<Category[]> {
    const response = await this.request<ApiResponse<Category[]>>("/categories");
    return response.data;
  }

  async createCategory(categoryData: Partial<Category>): Promise<Category> {
    return this.request<Category>("/categories", {
      method: "POST",
      body: JSON.stringify(categoryData),
    });
  }

  // Search endpoints
  async searchTools(
    query: string,
    filters?: {
      category?: string;
      tags?: string[];
      author?: string;
    },
  ): Promise<Tool[]> {
    const searchParams = new URLSearchParams({ q: query });

    if (filters?.category) {
      searchParams.append("category", filters.category);
    }
    if (filters?.tags) {
      filters.tags.forEach((tag) => searchParams.append("tags", tag));
    }
    if (filters?.author) {
      searchParams.append("author", filters.author);
    }

    const response = await this.request<ApiResponse<Tool[]>>(
      `/search?${searchParams}`,
    );
    return response.data;
  }

  async getSearchSuggestions(query: string): Promise<string[]> {
    const response = await this.request<ApiResponse<string[]>>(
      `/search/suggestions?q=${encodeURIComponent(query)}`,
    );
    return response.data;
  }

  // User/Author endpoints (if you have user management)
  async getAuthorTools(authorId: string): Promise<Tool[]> {
    const response = await this.request<ApiResponse<Tool[]>>(
      `/authors/${authorId}/tools`,
    );
    return response.data;
  }

  async getAuthorProfile(authorId: string): Promise<{
    id: string;
    name: string;
    email?: string;
    bio?: string;
    avatar?: string;
    toolsCount: number;
    totalDownloads: number;
  }> {
    return this.request(`/authors/${authorId}`);
  }

  // File upload endpoints
  async uploadFile(
    file: File,
    type: "screenshot" | "image" | "document",
  ): Promise<{
    url: string;
    filename: string;
  }> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    return this.request("/upload", {
      method: "POST",
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }

  // Batch operations
  async getToolsByIds(ids: string[]): Promise<Tool[]> {
    const response = await this.request<ApiResponse<Tool[]>>("/tools/batch", {
      method: "POST",
      body: JSON.stringify({ ids }),
    });
    return response.data;
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.request("/health");
  }
}

// Create singleton instance
const api = new MarketplaceAPI();

// Export both the class and the instance
export { api };
export default api;

// Helper functions
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
};

// Error handling helper
export const handleApiError = (error: any): string => {
  if (error && typeof error === "object") {
    if (error.message) {
      return error.message;
    }
    if (error.error) {
      return error.error;
    }
  }

  if (typeof error === "string") {
    return error;
  }

  return "An unexpected error occurred";
};
