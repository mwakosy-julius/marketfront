import React, { useState } from "react";
import {
  Play,
  Star,
  Menu,
  X,
  Code,
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
  Twitter,
  Github,
  Linkedin,
  Upload,
  DollarSign as MonetizeIcon,
  Rocket,
} from "lucide-react";

// Navigation Component
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-violet-400 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-black font-bold" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">KaiDoku</span>
              <span className="ml-2 text-sm text-gray-400 font-medium">
                for Creators
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#tools"
              className="text-white hover:text-green-500 text-sm font-medium transition-colors"
            >
              Tools
            </a>
            <a
              href="#earn"
              className="text-white hover:text-green-500 text-sm font-medium transition-colors"
            >
              Earn
            </a>
            <a
              href="#how-it-works"
              className="text-white hover:text-green-500 text-sm font-medium transition-colors"
            >
              How it Works
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-green-500 px-4 py-2 text-sm font-medium transition-colors">
              Log in
            </button>
            <button className="bg-violet-400 text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-green-400 transition-colors">
              Get started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-500 p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#tools"
              className="block text-white hover:text-green-500 text-base font-medium"
            >
              Tools
            </a>
            <a
              href="#earn"
              className="block text-white hover:text-green-500 text-base font-medium"
            >
              Earn
            </a>
            <a
              href="#how-it-works"
              className="block text-white hover:text-green-500 text-base font-medium"
            >
              How it Works
            </a>
            <div className="border-t border-gray-800 pt-4 space-y-2">
              <button className="block w-full text-left text-white hover:text-green-500 py-2 text-base font-medium">
                Log in
              </button>
              <button className="w-full bg-violet-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
          Make your algorithm the next big thing
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Powerful tools from KaiDoku to create, publish, and monetize your
          bioinformatics algorithms.
        </p>

        <button className="bg-violet-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-green-400 transition-colors transform hover:scale-105">
          Get started
        </button>
      </div>
    </div>
  );
};

// Feature Section Component
const FeatureSection: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
}> = ({ title, description, icon, reverse = false }) => {
  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
    >
      <div className="flex-1">
        <div className="w-full h-80 lg:h-96 bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
              {icon}
            </div>
            <p className="text-gray-500 text-sm">Algorithm creator dashboard</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Main Features Section
const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Build a dedicated following",
      description:
        "Tap into thousands of researchers worldwide who can discover and use your bioinformatics tools. Upload documentation, manage feedback, and track analytics to grow your user base and keep them coming back for more.",
      icon: <TrendingUp className="h-10 w-10 text-black" />,
    },
    {
      title: "Earn on your algorithms",
      description:
        "Choose from a range of monetization models designed to help you earn effortlessly. See how our creator program unlocks additional income streams through usage fees, subscriptions, and premium features.",
      icon: <DollarSign className="h-10 w-10 text-black" />,
      reverse: true,
    },
    {
      title: "Stand out on KaiDoku",
      description:
        "Take control over how your algorithms appear on KaiDoku, with customization tools for your creator profile, algorithm descriptions, documentation, and more.",
      icon: <Star className="h-10 w-10 text-black" />,
    },
  ];

  return (
    <section id="tools" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            All the tools to grow your algorithms
          </h2>
        </div>
        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureSection
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              reverse={feature.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Interest Section Component
const InterestSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-12">
          <div className="bg-black rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Interested in bioinformatics algorithms?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover all the ways KaiDoku for Creators helps you publish your
              algorithms, engage your users, track your growth, and more — no
              matter what field you specialize in.
            </p>
            <button className="bg-violet-400 text-black px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-colors">
              Learn more
            </button>
          </div>

          <div className="bg-black rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Looking to add machine learning?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Find out how KaiDoku is bringing AI to the forefront, and explore
              all the tools you need to integrate ML models, get discovered,
              build a loyal user base, and scale your algorithms.
            </p>
            <button className="bg-violet-400 text-black px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-colors">
              Explore AI tools
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
// const StatsSection: React.FC = () => {
//   const stats = [
//     { value: "15K+", label: "Active Creators" },
//     { value: "$2.1M+", label: "Total Earnings" },
//     { value: "450K+", label: "Algorithm Executions" },
//     { value: "98.7%", label: "Success Rate" },
//   ];

//   return (
//     <section className="py-16 bg-gray-900">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <div key={index}>
//               <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-gray-400 text-sm">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Success Stories Section
// const SuccessStories: React.FC = () => {
//   const creators = [
//     {
//       name: "Dr. Sarah Chen",
//       title: "Genomics Algorithm Specialist",
//       earnings: "$45K",
//       tools: 12,
//       quote:
//         "KaiDoku transformed my research into a sustainable income stream.",
//     },
//     {
//       name: "Alex Rodriguez",
//       title: "Protein Structure Expert",
//       earnings: "$32K",
//       tools: 8,
//       quote: "The platform makes it incredibly easy to monetize my algorithms.",
//     },
//     {
//       name: "Dr. Priya Patel",
//       title: "AI Bioinformatics Pioneer",
//       earnings: "$58K",
//       tools: 15,
//       quote: "I've built a thriving business around my AI research tools.",
//     },
//   ];

//   return (
//     <section id="creators" className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
//           Success Stories
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {creators.map((creator, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors"
//             >
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-violet-400 rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">
//                   {creator.name
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-white">
//                     {creator.name}
//                   </h3>
//                   <p className="text-gray-400 text-sm">{creator.title}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-500">
//                     {creator.earnings}
//                   </div>
//                   <div className="text-xs text-gray-500">Earned</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-500">
//                     {creator.tools}
//                   </div>
//                   <div className="text-xs text-gray-500">Tools</div>
//                 </div>
//               </div>

//               <p className="text-gray-400 text-sm italic">"{creator.quote}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Top Earning Tools Section
// const TopEarningTools: React.FC = () => {
//   const tools = [
//     {
//       name: "GeneMapper Pro",
//       creator: "Dr. Sarah Chen",
//       earnings: "$25K",
//       category: "Genomics",
//       description:
//         "A powerful tool for mapping gene sequences with high accuracy.",
//     },
//     {
//       name: "ProteinFold AI",
//       creator: "Alex Rodriguez",
//       earnings: "$18K",
//       category: "Protein Analysis",
//       description: "Predicts protein structures using advanced AI algorithms.",
//     },
//     {
//       name: "BioCluster",
//       creator: "Dr. Priya Patel",
//       earnings: "$22K",
//       category: "Data Clustering",
//       description: "Clusters biological data for insightful research outcomes.",
//     },
//   ];

//   return (
//     <section id="top-tools" className="py-20 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
//           Top Earning Tools
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {tools.map((tool, index) => (
//             <div
//               key={index}
//               className="bg-black rounded-2xl p-8 hover:bg-gray-800 transition-colors"
//             >
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-violet-400 rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">
//                   {tool.name[0]}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-white">{tool.name}</h3>
//                   <p className="text-gray-400 text-sm">by {tool.creator}</p>
//                 </div>
//               </div>
//               <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-500">
//                     {tool.earnings}
//                   </div>
//                   <div className="text-xs text-gray-500">Earned</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-green-500">
//                     {tool.category}
//                   </div>
//                   <div className="text-xs text-gray-500">Category</div>
//                 </div>
//               </div>
//               <button className="w-full bg-violet-400 text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-green-400 transition-colors">
//                 Explore Tool
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// How It Works Section
const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Create Your Algorithm",
      description:
        "Use KaiDoku’s intuitive tools to develop and test your bioinformatics algorithms with ease.",
      icon: <Code className="h-10 w-10 text-black" />,
    },
    {
      title: "Publish to the Platform",
      description:
        "Share your algorithm with a global community of researchers by publishing it on KaiDoku.",
      icon: <Upload className="h-10 w-10 text-black" />,
    },
    {
      title: "Monetize Your Work",
      description:
        "Set up subscriptions, usage fees, or premium features to earn revenue from your algorithms.",
      icon: <MonetizeIcon className="h-10 w-10 text-black" />,
    },
    {
      title: "Grow Your Audience",
      description:
        "Engage users with analytics, feedback, and customization to build a loyal following.",
      icon: <Rocket className="h-10 w-10 text-black" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-violet-400 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-black font-bold" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">KaiDoku</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering creators to build, publish, and monetize bioinformatics
              algorithms.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#tools"
                  className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="#earn"
                  className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                >
                  Earn
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                >
                  How it Works
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/help"
                  className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-green-500 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} KaiDoku. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main KaidokuLanding Component
const KaidokuLanding: React.FC = () => {
  return (
    <div className="bg-black">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      {/*<StatsSection />*/}
      <InterestSection />
      {/*<SuccessStories />
      <TopEarningTools />*/}
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default KaidokuLanding;
