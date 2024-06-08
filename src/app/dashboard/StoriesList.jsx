import * as React from "react";
import StoryCard from "./StoryCard";

const StoriesList = ({ stories }) => {
  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold mb-4">The Big Stories</h2>
      <div className="space-y-4">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            imageSrc={story.imageSrc}
            title={story.title}
            institute={story.institute}
            date={story.date}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesList;
