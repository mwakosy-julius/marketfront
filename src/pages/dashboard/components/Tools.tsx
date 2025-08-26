import React from "react";
import { Plus } from "lucide-react";

const Tools: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Tools</h1>
          <button className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={20} />
            Upload Tool
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
