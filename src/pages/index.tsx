import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Star,
  Users,
  Clock,
  Tag,
  ChevronRight,
  Download,
  Eye,
} from "lucide-react";

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  author: string;
  rating: number;
  downloads: number;
  lastUpdated: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

const BioinformaticsMarketplace: React.FC = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", name: "All Tools", count: 45 },
    { id: "genomics", name: "Genomics", count: 12 },
    { id: "proteomics", name: "Proteomics", count: 8 },
    { id: "transcriptomics", name: "Transcriptomics", count: 10 },
    { id: "phylogenetics", name: "Phylogenetics", count: 6 },
    { id: "structural", name: "Structural Biology", count: 9 },
  ];

  // Mock data - replace with your API calls
  const mockTools: Tool[] = [
    {
      id: "1",
      name: "FastQC Quality Control",
      description:
        "A quality control tool for high throughput sequence data with comprehensive reporting and visualization.",
      category: "genomics",
      author: "Babraham Institute",
      rating: 4.8,
      downloads: 15420,
      lastUpdated: "2024-01-15",
      tags: ["Quality Control", "NGS", "Sequencing"],
      featured: true,
    },
    {
      id: "2",
      name: "BLAST+ Suite",
      description:
        "Basic Local Alignment Search Tool for comparing primary biological sequence information.",
      category: "genomics",
      author: "NCBI",
      rating: 4.9,
      downloads: 28500,
      lastUpdated: "2024-01-20",
      tags: ["Alignment", "Search", "Database"],
      featured: true,
    },
    {
      id: "3",
      name: "Protein Structure Predictor",
      description:
        "Advanced machine learning model for predicting protein 3D structure from amino acid sequences.",
      category: "structural",
      author: "DeepMind",
      rating: 4.7,
      downloads: 8920,
      lastUpdated: "2024-01-10",
      tags: ["ML", "Structure", "Prediction"],
    },
    {
      id: "4",
      name: "RNA-Seq Analyzer",
      description:
        "Comprehensive pipeline for RNA sequencing data analysis including differential expression.",
      category: "transcriptomics",
      author: "Broad Institute",
      rating: 4.6,
      downloads: 12300,
      lastUpdated: "2024-01-18",
      tags: ["RNA-Seq", "Expression", "Pipeline"],
    },
    {
      id: "5",
      name: "Phylogenetic Tree Builder",
      description:
        "Maximum likelihood phylogenetic inference for large datasets with bootstrap support.",
      category: "phylogenetics",
      author: "University of Vienna",
      rating: 4.5,
      downloads: 5600,
      lastUpdated: "2024-01-12",
      tags: ["Phylogeny", "ML", "Evolution"],
    },
    {
      id: "6",
      name: "Mass Spec Processor",
      description:
        "Process and analyze mass spectrometry data for protein identification and quantification.",
      category: "proteomics",
      author: "Max Planck Institute",
      rating: 4.4,
      downloads: 7800,
      lastUpdated: "2024-01-16",
      tags: ["Mass Spec", "Proteomics", "Quantification"],
    },
  ];

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setTools(mockTools);
      setFilteredTools(mockTools);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = tools;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    setFilteredTools(filtered);
  }, [tools, selectedCategory, searchTerm]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading marketplace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Bioinformatics Marketplace
            </h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Submit Tool
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search tools, descriptions, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* Featured Tools */}
            {selectedCategory === "all" && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Featured Tools
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTools
                    .filter((tool) => tool.featured)
                    .map((tool) => (
                      <div
                        key={tool.id}
                        className="bg-white rounded-lg shadow-sm border-l-4 border-blue-600 p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {tool.name}
                          </h3>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Featured
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {tool.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{tool.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4" />
                            <span>{formatNumber(tool.downloads)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{formatDate(tool.lastUpdated)}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {tool.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                            <span>View Details</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* All Tools */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedCategory === "all"
                    ? "All Tools"
                    : categories.find((c) => c.id === selectedCategory)?.name}
                  <span className="text-gray-500 font-normal ml-2">
                    ({filteredTools.length} tools)
                  </span>
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Most Popular</option>
                  <option>Recently Updated</option>
                  <option>Highest Rated</option>
                  <option>Most Downloaded</option>
                </select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {tool.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{tool.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{formatNumber(tool.downloads)}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">by {tool.author}</span>
                      <span className="text-gray-500">
                        {formatDate(tool.lastUpdated)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No tools found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioinformaticsMarketplace;
