import React, { useState } from "react";

const topics = [
  "Arrays",
  "Strings",
  "Hash Table",
  "Dynamic Programming",
  "Math",
  "Sorting",
  "Greedy",
  "Greedy",
];

const TopicFilter = ({ onFilterChange }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicClick = (topic) => {
    const updatedTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];
    setSelectedTopics(updatedTopics);
    onFilterChange(updatedTopics);
  };

  return (
    <div className="flex p-2 justify-center">
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <p
            key={topic}
            onClick={() => handleTopicClick(topic)}
            className={`px-3 py-2 border rounded ${
              selectedTopics.includes(topic)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {topic}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TopicFilter;
