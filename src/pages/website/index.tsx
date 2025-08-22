import React, { useState, useEffect } from "react";
import {
  Play,
  Star,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Zap,
  Shield,
  Globe,
  Database,
  MessageSquare,
  Users,
  TrendingUp,
  DollarSign,
  Code,
  Sparkles,
  Target,
  BarChart3,
} from "lucide-react";

// Types
interface Creator {
  id: string;
  name: string;
  title: string;
  avatar: string;
  tools: number;
  earnings: string;
  rating: number;
  description: string;
  specialties: string[];
}

interface Tool {
  id: string;
  name: string;
  category: string;
  executions: number;
  rating: number;
  earnings: string;
  description: string;
  creator: string;
  featured?: boolean;
}

// Mock Data
const featuredCreators: Creator[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    title: "Genomics Algorithm Specialist",
    avatar: "SC",
    tools: 12,
    earnings: "$45K",
    rating: 4.9,
    description:
      "Leading researcher in computational genomics with breakthrough sequence alignment algorithms.",
    specialties: ["Sequence Analysis", "Machine Learning", "Genomics"],
  },
  {
    id: "2",
    name: "Alex Rodriguez",
    title: "Protein Structure Expert",
    avatar: "AR",
    tools: 8,
    earnings: "$32K",
    rating: 4.8,
    description:
      "Computational biologist specializing in protein folding prediction and structural analysis.",
    specialties: ["Protein Analysis", "3D Modeling", "Drug Discovery"],
  },
  {
    id: "3",
    name: "Dr. Priya Patel",
    title: "AI Bioinformatics Pioneer",
    avatar: "PP",
    tools: 15,
    earnings: "$58K",
    rating: 5.0,
    description:
      "AI researcher creating next-generation machine learning tools for biological data analysis.",
    specialties: ["AI/ML", "Data Mining", "Predictive Modeling"],
  },
];

const topTools: Tool[] = [
  {
    id: "1",
    name: "FastAlign Pro",
    category: "Sequence Analysis",
    executions: 15420,
    rating: 4.9,
    earnings: "$12.5K",
    description: "Advanced sequence alignment with ML optimization",
    creator: "Dr. Sarah Chen",
    featured: true,
  },
  {
    id: "2",
    name: "ProteinFold AI",
    category: "Structural Biology",
    executions: 8930,
    rating: 4.8,
    earnings: "$8.9K",
    description: "AI-powered protein structure prediction",
    creator: "Alex Rodriguez",
    featured: true,
  },
  {
    id: "3",
    name: "GenomeInsight",
    category: "Genomics",
    executions: 22150,
    rating: 5.0,
    earnings: "$18.2K",
    description: "Comprehensive genome analysis suite",
    creator: "Dr. Priya Patel",
    featured: true,
  },
];

// Navigation Component
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">KaiDoku</span>
              <span className="ml-2 text-sm text-purple-400 font-medium">
                for Creators
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#creators"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Creator Spotlight
            </a>
            <a
              href="#earnings"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Earnings
            </a>
            <a
              href="#tools"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Top Tools
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              How It Works
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
              Start Creating
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#creators"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Creator Spotlight
            </a>
            <a
              href="#earnings"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Earnings
            </a>
            <a
              href="#tools"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Top Tools
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              How It Works
            </a>
            <div className="border-t border-gray-800 pt-4 pb-3">
              <div className="px-3 space-y-2">
                <button className="block w-full text-left text-gray-300 hover:text-white py-2 text-base font-medium">
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                  Start Creating
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    {
      value: "$2.1M+",
      label: "Creator Earnings",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      value: "15K+",
      label: "Active Creators",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: "450K+",
      label: "Tool Executions",
      icon: <Play className="h-6 w-6" />,
    },
    {
      value: "98.7%",
      label: "Success Rate",
      icon: <Target className="h-6 w-6" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/6 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
          <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
          <span className="text-purple-200 text-sm font-medium">
            Join 15,000+ Algorithm Creators
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Turn Your Algorithms
          </span>
          <br />
          <span className="text-white">Into Revenue</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Create, publish, and monetize bioinformatics tools on the world's
          largest scientific computing marketplace. Start earning from day one.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 flex items-center group">
            Start Creating Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/20 transition-all duration-300 flex items-center group">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            See Success Stories
          </button>
        </div>

        {/* Animated Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transition-all duration-500 transform ${
                currentMetric === index
                  ? "scale-110 border-purple-500/50 bg-purple-900/30"
                  : "scale-100"
              }`}
            >
              <div
                className={`flex items-center justify-center mb-3 ${
                  currentMetric === index ? "text-purple-400" : "text-gray-400"
                }`}
              >
                {metric.icon}
              </div>
              <div
                className={`text-2xl md:text-3xl font-bold mb-1 ${
                  currentMetric === index
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-purple-400" />
      </div>
    </div>
  );
};

// Creator Spotlight Section
const CreatorSpotlight: React.FC = () => {
  return (
    <section id="creators" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creator Spotlight
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the brilliant minds earning substantial income by sharing their
            algorithmic innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCreators.map((creator, index) => (
            <div
              key={creator.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:bg-purple-900/20"
            >
              {/* Creator Avatar and Info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {creator.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {creator.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{creator.title}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {creator.tools}
                  </div>
                  <div className="text-xs text-gray-500">Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {creator.earnings}
                  </div>
                  <div className="text-xs text-gray-500">Earned</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    <span className="font-bold">{creator.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {creator.description}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {creator.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-purple-900/50 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
            Become a Creator
          </button>
        </div>
      </div>
    </section>
  );
};

// Top Earning Tools Section
const TopTools: React.FC = () => {
  return (
    <section id="tools" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Top Earning Tools
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the most successful algorithms generating real revenue for
            their creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topTools.map((tool, index) => (
            <div
              key={tool.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{tool.category}</p>
                </div>
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  ${tool.earnings}
                </span>
              </div>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {tool.description}
              </p>

              <div className="flex items-center justify-between text-sm mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{tool.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-400">
                    <Play className="h-4 w-4" />
                    <span>{tool.executions.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-xs text-gray-500 mb-2">Created by</p>
                <p className="text-sm text-purple-400 font-medium">
                  {tool.creator}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300">
            View All Tools
          </button>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Algorithm",
      description:
        "Develop bioinformatics tools using your preferred programming language and frameworks.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      number: "02",
      title: "Publish & Set Pricing",
      description:
        "Upload your algorithm, set your pricing model, and make it available to the global research community.",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      number: "03",
      title: "Earn Revenue",
      description:
        "Get paid every time researchers use your tools. Track earnings and optimize based on usage analytics.",
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start monetizing your algorithms in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-gray-800 text-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold border-2 border-purple-500">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 flex items-center mx-auto group">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">KaiDoku</span>
              <span className="ml-2 text-sm text-purple-400 font-medium">
                for Creators
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering algorithm creators to monetize their innovations and
              drive scientific discovery worldwide.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Globe className="h-5 w-5 text-gray-400" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Create Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Earnings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 KaiDoku. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const KaidokuLanding: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CreatorSpotlight />
      <TopTools />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default KaidokuLanding;
