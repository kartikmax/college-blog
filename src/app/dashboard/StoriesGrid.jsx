import * as React from "react";
import NewsCard from "./NewsCard";

const StoriesGrid = ({ stories }) => {
  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold mb-4">The Big Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stories.map((story, index) => (
          <NewsCard
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

export default StoriesGrid;
