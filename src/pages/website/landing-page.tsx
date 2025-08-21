import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Kaidoku Marketplace</h1>
        <nav>
          <a href="#features" className="mx-4 hover:underline">
            Features
          </a>
          <a href="#tools" className="mx-4 hover:underline">
            Tools
          </a>
          <a href="#get-started" className="mx-4 hover:underline">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-700 to-violet-700 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-4">
          Make Your Bioinformatics Platform the Next Big Thing
        </h2>
        <p className="text-xl mb-8">
          Launch, grow, and succeed with Kaidoku Marketplace. Empower your
          bioinformatics tools to reach a global audience.
        </p>
        <a
          href="#get-started"
          className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition"
        >
          Start Now
        </a>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Why Choose Kaidoku Marketplace?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-violet-600">
              Global Reach
            </h3>
            <p className="text-gray-600">
              Showcase your bioinformatics tools to researchers and scientists
              worldwide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-violet-600">
              Easy Integration
            </h3>
            <p className="text-gray-600">
              Seamlessly integrate your tools with our platform using our
              developer-friendly APIs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-violet-600">
              Analytics & Insights
            </h3>
            <p className="text-gray-600">
              Gain valuable insights into how your tools are used and optimize
              for success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tools: React.FC = () => {
  return (
    <section
      id="tools"
      className="py-16 bg-gradient-to-r from-blue-500 to-violet-500 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Tools for Creators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Developer Dashboard</h3>
            <p>
              Manage your bioinformatics tools, track performance, and update
              your listings with ease.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
            <p>
              Join a vibrant community of bioinformatics creators to share ideas
              and collaborate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const GetStarted: React.FC = () => {
  return (
    <section id="get-started" className="py-20 text-center bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-800">
          Ready to Launch?
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Join Kaidoku Marketplace today and take your bioinformatics platform
          to the next level.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Kaidoku Marketplace. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="mx-2 hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Tools />
      <GetStarted />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
