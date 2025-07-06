import React, { useState } from "react";
import { topics } from "@pjt/components/utilits/TopicTags";

const TopicFilter = ({ onFilterChange }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicClick = (topic) => {
    const updatedTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];
    setSelectedTopics(updatedTopics);
    onFilterChange(updatedTopics);
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative flex overflow-hidden ${
        expanded ? "flex-wrap" : "flex-nowrap"
      }`}
    >
      {topics.map((topic) => (
        <div key={topic.name} className="group m-[10px] flex items-center">
          <a
            onClick={() => handleTopicClick(topic)}
            className="group-hover:text-blue-500 inline-flex items-center"
            href={`/${topic.name}`}
          >
            <span className="whitespace-nowrap">{topic.name}</span>
            <span className="rounded-[10px]  px-1.5 bg-neutral-600 ml-1 ">
              {topic.count}
            </span>
          </a>
        </div>
      ))}
      <div className="flex z-1 h-9 top-2.5 absolute right-0">
        <span className="w-6 z-2 bg-gradient-to-l from-[#1a1a1a] to-[#1a1a1a00]"></span>
        <span
          onClick={() => setExpanded((pre) => !pre)}
          className="bg-neutral-900 text-neutral-500 cursor-pointer"
        >
          {expanded ? "Collapse ^ " : "Expend ↓"}
        </span>
      </div>
    </div>
  );
};

export default TopicFilter;
