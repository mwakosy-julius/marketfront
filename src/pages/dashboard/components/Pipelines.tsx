import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Package,
  Code,
  Star,
  Download,
  Eye,
  Calendar,
  User,
  Tag,
  GitBranch,
  Play,
  Settings,
  Upload,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

// Define types for pipeline data
interface Pipeline {
  id: number;
  name: string;
  description: string;
  category: string;
  version: string;
  status: "published" | "draft";
  downloads: number;
  stars: number;
  lastUpdated: string;
  author: string;
  tags: string[];
  workflowType: string;
}

interface UploadData {
  name: string;
  description: string;
  category: string;
  workflowFile: File | null;
  readme: string;
  version: string;
  tags: string[];
}

const Pipelines: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "my-pipelines" | "published" | "drafts"
  >("my-pipelines");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [uploadStep, setUploadStep] = useState<number>(1);
  const [uploadData, setUploadData] = useState<UploadData>({
    name: "",
    description: "",
    category: "",
    workflowFile: null,
    readme: "",
    version: "",
    tags: [],
  });

  // Mock data for existing pipelines
  const pipelines: Pipeline[] = [
    {
      id: 1,
      name: "RNA-Seq Analysis Pipeline",
      description:
        "Comprehensive RNA-Seq analysis with quality control and differential expression",
      category: "RNA-Seq",
      version: "1.2.0",
      status: "published",
      downloads: 987,
      stars: 28,
      lastUpdated: "2025-07-10",
      author: "Dr. Emily Watson",
      tags: ["rna-seq", "transcriptomics", "differential-expression"],
      workflowType: "Nextflow",
    },
    {
      id: 2,
      name: "WGS Variant Pipeline",
      description:
        "Whole-genome sequencing pipeline for variant detection and annotation",
      category: "Variant Analysis",
      version: "2.0.1",
      status: "published",
      downloads: 654,
      stars: 19,
      lastUpdated: "2025-07-15",
      author: "Prof. James Lee",
      tags: ["wgs", "variants", "annotation"],
      workflowType: "Snakemake",
    },
    {
      id: 3,
      name: "Metagenomics Workflow",
      description:
        "Draft metagenomics pipeline for microbial community analysis",
      category: "Metagenomics",
      version: "0.9.0-beta",
      status: "draft",
      downloads: 123,
      stars: 8,
      lastUpdated: "2025-08-01",
      author: "You",
      tags: ["metagenomics", "microbiome", "classification"],
      workflowType: "CWL",
    },
  ];

  const categories: string[] = [
    "RNA-Seq",
    "Variant Analysis",
    "Metagenomics",
    "Proteomics",
    "Epigenomics",
    "Single-Cell",
  ];

  const handleUploadNext = () => {
    if (uploadStep < 4) {
      setUploadStep(uploadStep + 1);
    }
  };

  const handleUploadPrev = () => {
    if (uploadStep > 1) {
      setUploadStep(uploadStep - 1);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setUploadData({ ...uploadData, workflowFile: file });
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    setUploadData({ ...uploadData, tags });
  };

  const UploadModal: React.FC = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Upload New Pipeline
            </h2>
            <button
              onClick={() => setShowUploadModal(false)}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center space-x-4 mb-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= uploadStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 ${step < uploadStep ? "bg-blue-600" : "bg-gray-200"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          {uploadStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Pipeline Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pipeline Name
                  </label>
                  <input
                    type="text"
                    value={uploadData.name}
                    onChange={(e) =>
                      setUploadData({ ...uploadData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter pipeline name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Version
                  </label>
                  <input
                    type="text"
                    value={uploadData.version}
                    onChange={(e) =>
                      setUploadData({ ...uploadData, version: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 1.0.0"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={uploadData.description}
                    onChange={(e) =>
                      setUploadData({
                        ...uploadData,
                        description: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe what your pipeline does..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={uploadData.category}
                    onChange={(e) =>
                      setUploadData({ ...uploadData, category: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    placeholder="Enter tags separated by commas"
                    onChange={handleTagsChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {uploadStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Workflow Configuration
              </h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Package size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Upload Workflow File
                </p>
                <p className="text-gray-600 mb-4">
                  Drag and drop your workflow file (e.g., Nextflow, Snakemake,
                  CWL) here, or click to browse
                </p>
                <input
                  type="file"
                  accept=".nf,.smk,.cwl,.yml,.yaml"
                  onChange={handleFileChange}
                  className="hidden"
                  id="workflow-upload"
                />
                <label
                  htmlFor="workflow-upload"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Choose File
                </label>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle
                    className="text-yellow-600 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-yellow-800">
                      Workflow File Requirements
                    </h4>
                    <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                      <li>
                        • Supported formats: Nextflow (.nf), Snakemake (.smk),
                        CWL (.cwl, .yml)
                      </li>
                      <li>• Include clear input/output parameters</li>
                      <li>• Specify tool dependencies in the workflow</li>
                      <li>• Ensure compatibility with Docker containers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {uploadStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Documentation
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  README Content
                </label>
                <textarea
                  value={uploadData.readme}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, readme: e.target.value })
                  }
                  rows={12}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  placeholder="# Pipeline Name

## Description
Describe your pipeline here...

## Usage
```bash
nextflow run pipeline.nf --input data.fastq --output results/
nextflow run pipeline.nf --input data.fastq --output results/
```"
                />
              </div>
              <div className="text-sm text-gray-600">
                <p>
                  Use Markdown formatting. Include usage examples, parameter
                  descriptions, and expected input/output formats.
                </p>
              </div>
            </div>
          )}

          {uploadStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Review & Publish
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">
                    Pipeline Name:
                  </span>
                  <span className="text-gray-900">
                    {uploadData.name || "Not specified"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Version:</span>
                  <span className="text-gray-900">
                    {uploadData.version || "Not specified"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="text-gray-900">
                    {uploadData.category || "Not specified"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">
                    Workflow File:
                  </span>
                  <span className="text-gray-900">
                    {uploadData.workflowFile ? "✓ Uploaded" : "Not uploaded"}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <CheckCircle
                    className="text-blue-600 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-medium text-blue-800">
                      Publishing Options
                    </h4>
                    <div className="mt-3 space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="publish"
                          value="draft"
                          className="mr-2"
                          defaultChecked
                        />
                        <span className="text-sm text-blue-700">
                          Save as Draft (you can publish later)
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="publish"
                          value="public"
                          className="mr-2"
                        />
                        <span className="text-sm text-blue-700">
                          Publish Publicly (available to all users)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6 border-t border-gray-200 mt-8">
            <button
              onClick={handleUploadPrev}
              disabled={uploadStep === 1}
              className={`px-4 py-2 rounded-lg ${
                uploadStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors`}
            >
              Previous
            </button>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={
                  uploadStep === 4
                    ? () => setShowUploadModal(false)
                    : handleUploadNext
                }
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {uploadStep === 4 ? "Publish Pipeline" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              My Pipelines
            </h1>
            <p className="text-gray-600 text-lg">
              Manage your bioinformatics pipelines and workflows
            </p>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Upload size={20} />
            Upload New Pipeline
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            {[
              {
                id: "my-pipelines",
                label: "My Pipelines",
                count: pipelines.length,
              },
              {
                id: "published",
                label: "Published",
                count: pipelines.filter((p) => p.status === "published").length,
              },
              {
                id: "drafts",
                label: "Drafts",
                count: pipelines.filter((p) => p.status === "draft").length,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as "my-pipelines" | "published" | "drafts",
                  )
                }
                className={`px-6 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search your pipelines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>

        {/* Pipelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pipelines.map((pipeline) => (
            <div
              key={pipeline.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {pipeline.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {pipeline.description}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      pipeline.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {pipeline.status}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pipeline.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Package size={16} />
                    <span>
                      Version {pipeline.version} • {pipeline.workflowType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Updated {pipeline.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Download size={16} />
                      <span>{pipeline.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} />
                      <span>{pipeline.stars}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Eye size={16} />
                    View
                  </button>
                  <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                    <Settings size={16} />
                  </button>
                  <button className="px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                    <Play size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for new users */}
        {pipelines.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Package size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No pipelines yet
            </h3>
            <p className="text-gray-600 mb-6">
              Upload your first bioinformatics pipeline to get started
            </p>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <Upload size={20} />
              Upload Your First Pipeline
            </button>
          </div>
        )}
      </div>

      {showUploadModal && <UploadModal />}
    </div>
  );
};

export default Pipelines;
