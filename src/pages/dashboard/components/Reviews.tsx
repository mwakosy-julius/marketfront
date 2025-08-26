import React from "react";
import { MessageSquare } from "lucide-react";

const Reviews: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Reviews & Feedback
        </h1>

        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <MessageSquare size={48} className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No reviews yet</h3>
          <p className="text-gray-600">
            Reviews from users will appear here once your tools are published
            and used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
