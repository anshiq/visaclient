import { useState } from "react";

const CollapsibleFAQ = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#F2F2F2] py-4 px-6 rounded-lg shadow-md">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleExpansion}
      >
        <div className="text-xl text-gray-800 font-medium">{title}</div>
        <div className="text-2xl text-gray-500 font-bold">
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`transition-all duration-1000 overflow-hidden ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 text-gray-600 text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleFAQ;
