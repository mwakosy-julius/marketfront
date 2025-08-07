import React, { useState, useEffect } from "react";
import {
  Search,
  Upload,
  Star,
  Download,
  DollarSign,
  TrendingUp,
  Users,
  Code,
  Database,
  Workflow,
} from "lucide-react";

const BioPlatformApp = () => {
  const [currentView, setCurrentView] = useState("marketplace");
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock data for demonstration
  const mockContent = [
    {
      id: 1,
      title: "BLAST+ Alignment Tool",
      description:
        "High-performance sequence alignment tool for genomic analysis",
      content_type: "TOOL",
      category: "genomics",
      tags: ["alignment", "blast", "sequence"],
      pricing_model: "PAY_PER_USE",
      price: 0.05,
      rating: 4.8,
      download_count: 1250,
      creator: { username: "biotools_lab", full_name: "BioTools Laboratory" },
    },
    {
      id: 2,
      title: "RNA-Seq Analysis Pipeline",
      description:
        "Complete pipeline for RNA sequencing data analysis from raw reads to differential expression",
      content_type: "PIPELINE",
      category: "transcriptomics",
      tags: ["rna-seq", "differential-expression", "pipeline"],
      pricing_model: "SUBSCRIPTION",
      price: 29.99,
      rating: 4.9,
      download_count: 890,
      creator: { username: "genomics_pro", full_name: "Genomics Professional" },
    },
    {
      id: 3,
      title: "Human Genome Reference Dataset",
      description: "Curated human genome reference data with annotations",
      content_type: "DATASET",
      category: "reference-data",
      tags: ["human-genome", "reference", "annotations"],
      pricing_model: "ONE_TIME",
      price: 99.99,
      rating: 4.7,
      download_count: 2100,
      creator: { username: "ref_data_hub", full_name: "Reference Data Hub" },
    },
  ];

  useEffect(() => {
    setContent(mockContent);
  }, []);

  const ContentCard = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          {item.content_type === "TOOL" && (
            <Code className="w-5 h-5 text-blue-600" />
          )}
          {item.content_type === "PIPELINE" && (
            <Workflow className="w-5 h-5 text-green-600" />
          )}
          {item.content_type === "DATASET" && (
            <Database className="w-5 h-5 text-purple-600" />
          )}
          <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {item.content_type}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600">{item.rating}</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {item.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">by</span>
          <span className="text-sm font-medium text-gray-900">
            {item.creator.username}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Download className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{item.download_count}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <DollarSign className="w-4 h-4 text-green-600" />
          <span className="font-semibold text-green-600">
            {item.pricing_model === "FREE" ? "Free" : `$${item.price}`}
          </span>
          <span className="text-xs text-gray-500">
            {item.pricing_model === "PAY_PER_USE" && "/ use"}
            {item.pricing_model === "SUBSCRIPTION" && "/ month"}
            {item.pricing_model === "ONE_TIME" && "one-time"}
          </span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );

  const MarketplaceView = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">
          BioPlatform Creator Marketplace
        </h1>
        <p className="text-xl mb-6">
          Discover, use, and monetize bioinformatics tools, pipelines, and
          datasets
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools, pipelines, datasets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Featured Content */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Content</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.slice(0, 3).map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Genomics", "Proteomics", "Transcriptomics", "Metabolomics"].map(
            (category) => (
              <div
                key={category}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
              >
                <h3 className="font-semibold text-gray-900">{category}</h3>
                <p className="text-sm text-gray-600">150+ tools</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );

  const CreatorDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Creator Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Upload className="w-4 h-4" />
          <span>Upload Content</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Earnings</p>
              <p className="text-2xl font-bold text-green-600">$1,247.50</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Content Items</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <Code className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Downloads</p>
              <p className="text-2xl font-bold text-purple-600">4,320</p>
            </div>
            <Download className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-yellow-600">4.8</p>
            </div>
            <Star className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Activity
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              {
                action: "Tool downloaded",
                item: "BLAST+ Alignment Tool",
                user: "researcher_123",
                time: "2 hours ago",
              },
              {
                action: "Pipeline purchased",
                item: "RNA-Seq Analysis Pipeline",
                user: "lab_admin",
                time: "5 hours ago",
              },
              {
                action: "New review received",
                item: "Protein Structure Predictor",
                user: "bio_student",
                time: "1 day ago",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.action}</span> -{" "}
                    {activity.item}
                  </p>
                  <p className="text-xs text-gray-600">
                    by {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Navigation = () => (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                BioPlatform
              </span>
            </div>

            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => setCurrentView("marketplace")}
                className={`px-3 py-2 text-sm font-medium ${currentView === "marketplace" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"}`}
              >
                Marketplace
              </button>
              <button
                onClick={() => setCurrentView("dashboard")}
                className={`px-3 py-2 text-sm font-medium ${currentView === "dashboard" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"}`}
              >
                Creator Dashboard
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {!user ? (
              <div className="space-x-2">
                <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Sign In
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {user.username}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === "marketplace" && <MarketplaceView />}
        {currentView === "dashboard" && <CreatorDashboard />}
      </main>
    </div>
  );
};

export default BioPlatformApp;
